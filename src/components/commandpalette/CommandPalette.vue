<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { useDebounce } from "@vueuse/core";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import {
  flyToItem,
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

const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const open = defineModel<boolean>("open", { default: false });
const { dispatchAction: _dispatchAction } = useScenarioActions();

const { msdl } = useScenarioStore();
const selectStore = useSelectStore();

const rawQuery = ref("");
const query = computed(() => rawQuery.value.replace(/^[#@>]/, "").trim());
const debouncedQuery = useDebounce(query, 200);

const groupedHits = ref<ReturnType<typeof search>>();

const isActionSearch = computed(
  () => rawQuery.value.startsWith("#") || rawQuery.value.startsWith(">"),
);

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
  if (isActionSearch.value) return;
  groupedHits.value = search(debouncedQuery.value);
});

watch([isActionSearch, query], async ([isa, q]) => {
  if (!isa) return;
  const filteredActions = q ? searchActions(q) : actionItems;
  groupedHits.value = new Map([["Actions", filteredActions]]);
});

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

function selectItem(item: UnitSearchResult | EquipmentSearchResult | ActionSearchResult) {
  if (isUnitEquipmentSearchResult(item)) {
    selectUnitOrEquipmentItem(item.id);
  } else if (isActionSearchResult(item)) {
    dispatchAction(item.action);
  }
}

function isUnitEquipmentSearchResult(
  item: UnitSearchResult | EquipmentSearchResult | ActionSearchResult,
): item is UnitSearchResult | EquipmentSearchResult {
  return item.category === "Units" || item.category === "Equipment";
}

function isActionSearchResult(
  item: UnitSearchResult | EquipmentSearchResult | ActionSearchResult,
): item is ActionSearchResult {
  return item.category === "Actions";
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
                  <component :is="item.icon" class="size-6" />
                </div>
                <div class="grid grid-cols-[auto,1fr]">
                  <span v-html="item.highlight ? item.highlight : item.label" />
                </div>
              </template>
            </ListboxItem>
          </ListboxGroup>
          <p class="py-6 text-center text-sm" v-if="noResults">No search results found.</p>
        </div>
      </ListboxContent>
    </ListboxRoot>
  </CommandPaletteDialog>
</template>
