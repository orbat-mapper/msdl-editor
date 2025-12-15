<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { useDebounce } from "@vueuse/core";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import {
  flyToItem,
  flyToPlace,
  type ScenarioAction,
  useScenarioActions,
} from "@/composables/scenarioActions.ts";
import CommandPaletteDialog from "@/components/commandpalette/CommandPaletteDialog.vue";
import { ListboxContent, ListboxGroup, ListboxGroupLabel, ListboxItem, ListboxRoot } from "reka-ui";
import CommandPaletteInput from "@/components/commandpalette/CommandPaletteInput.vue";
import {
  type ActionSearchResult,
  type EquipmentSearchResult,
  type UnitSearchResult,
  useScenarioSearch,
} from "@/composables/scenarioSearching.ts";
import { type ExtendedPhotonSearchResult, useGeoSearch } from "@/composables/geosearching.ts";
import CommandPalettePlaceItem from "@/components/commandpalette/CommandPalettePlaceItem.vue";

type SearchItemResult =
  | UnitSearchResult
  | EquipmentSearchResult
  | ActionSearchResult
  | ExtendedPhotonSearchResult;

const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const open = defineModel<boolean>("open", { default: false });
const { dispatchAction: _dispatchAction } = useScenarioActions();

const { msdl } = useScenarioStore();
const selectStore = useSelectStore();
const { photonSearch } = useGeoSearch();

const rawQuery = ref("");
const query = computed(() => rawQuery.value.replace(/^[#@>]/, "").trim());
const debouncedQuery = useDebounce(query, 200);
const geoDebouncedQuery = useDebounce(query, 300);
const mapCenter = ref<[number, number] | null>(null);

const groupedHits = ref<ReturnType<typeof search> | Map<"Places", ExtendedPhotonSearchResult[]>>();

const isActionSearch = computed(
  () => rawQuery.value.startsWith("#") || rawQuery.value.startsWith(">"),
);

const isGeoSearch = computed(() => rawQuery.value.startsWith("@"));

const noResults = computed(() => {
  if (debouncedQuery.value && groupedHits.value) {
    return groupedHits.value.size === 0;
  }
  return false;
});

const { search, searchActions, actionItems } = useScenarioSearch();

function dispatchAction(action: ScenarioAction) {
  _dispatchAction(action);
  open.value = false;
}

// Watch for changes to the searchQuery
watchEffect(() => {
  if (isActionSearch.value || isGeoSearch.value) return;
  groupedHits.value = search(debouncedQuery.value);
});

watch([isActionSearch, query], async ([isa, q]) => {
  if (!isa) return;
  const filteredActions = q ? searchActions(q) : actionItems;
  groupedHits.value = new Map([["Actions", filteredActions]]);
});

watch(
  () => isGeoSearch.value && geoDebouncedQuery.value.trim(),
  async (q) => {
    if (!q) return;
    const data = await photonSearch(q, { mapCenter: mapCenter.value });
    groupedHits.value = new Map([["Places", data.map((d) => ({ ...d, category: "Places" }))]]);
  },
);

watch(
  open,
  (isOpen) => {
    if (isOpen) {
      // get map center coordinates
      const center = mlMap?.getCenter();
      if (center) {
        mapCenter.value = [center.lng, center.lat];
      } else {
        mapCenter.value = null;
      }
    }
  },
  { immediate: true },
);

function selectUnitOrEquipmentItem(itemId: string) {
  const activeItemId = itemId;
  if (!activeItemId) return;
  const activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
  selectStore.activeItem = activeItem;
  open.value = false;
  // searchQuery.value = "";
  if (activeItem && mlMap) {
    flyToItem(activeItem, mlMap, { zoom: 10 });
    dispatchAction("LocateInOrbat");
  }
}

function selectItem(
  item: UnitSearchResult | EquipmentSearchResult | ActionSearchResult | ExtendedPhotonSearchResult,
) {
  if (isUnitEquipmentSearchResult(item)) {
    selectUnitOrEquipmentItem(item.id);
  } else if (isActionSearchResult(item)) {
    dispatchAction(item.action);
  } else if (isGeoSearchResult(item)) {
    if (!mlMap) return;
    open.value = false;
    flyToPlace(item, mlMap);
  }
}

function isUnitEquipmentSearchResult(
  item: SearchItemResult,
): item is UnitSearchResult | EquipmentSearchResult {
  return item.category === "Units" || item.category === "Equipment";
}

function isActionSearchResult(item: SearchItemResult): item is ActionSearchResult {
  return item.category === "Actions";
}

function isGeoSearchResult(item: SearchItemResult): item is ExtendedPhotonSearchResult {
  return item.category === "Places";
}
</script>

<template>
  <CommandPaletteDialog v-model:open="open" @update:modelValue="open = false">
    <ListboxRoot
      data-slot="command"
      class="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md"
    >
      <CommandPaletteInput placeholder="Type a command or search..." v-model="rawQuery" />
      <ListboxContent
        data-slot="command-list"
        class="max-h-[60vh] scroll-py-1 overflow-x-hidden overflow-y-auto"
      >
        <div role="presentation">
          <ListboxGroup
            v-for="[source, hits] in groupedHits"
            :key="source"
            :id="source"
            data-slot="command-group"
            class="text-foreground overflow-hidden p-1"
          >
            <ListboxGroupLabel
              data-slot="command-group-heading"
              class="px-2 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {{ source }}
            </ListboxGroupLabel>
            <ListboxItem
              v-for="item in hits"
              :key="item.id"
              data-slot="command-item"
              :value="item"
              class="[&_b]:text-red-600 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              @select="selectItem(item)"
            >
              <template v-if="isUnitEquipmentSearchResult(item)">
                <div class="justify-center flex w-6">
                  <MilSymbol class="size-6" :sidc="item.sidc" :size="100" />
                </div>
                <div class="grid grid-cols-[auto,1fr]">
                  <span v-html="item.highlight ? item.highlight : item.label" />
                  <div class="font-light text-sm text-muted-foreground">
                    {{ item.id }}
                  </div>
                </div>
              </template>
              <template v-else-if="isActionSearchResult(item)">
                <div class="justify-center flex w-6">
                  <component :is="item.icon" class="size-4" />
                </div>
                <div class="grid grid-cols-[auto,1fr]">
                  <span v-html="item.highlight ? item.highlight : item.label" />
                </div>
              </template>
              <CommandPalettePlaceItem
                :item
                :center="mapCenter"
                v-else-if="isGeoSearchResult(item)"
              />
            </ListboxItem>
          </ListboxGroup>
          <p class="py-6 text-center text-sm" v-if="noResults">No search results found.</p>
        </div>
      </ListboxContent>
    </ListboxRoot>
  </CommandPaletteDialog>
</template>
