<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ref, watch } from "vue";
import { useDebounce } from "@vueuse/core";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";

import { Download, Grid3x3Icon, ListTreeIcon, Upload } from "lucide-vue-next";
import {
  flyToItem,
  type ScenarioAction,
  useScenarioActions,
} from "@/composables/scenarioActions.ts";
import type { EquipmentItem, Unit } from "@orbat-mapper/msdllib";
import { groupByObj } from "@/utils.ts";

const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const open = defineModel<boolean>("open", { default: false });
const { dispatchAction: _dispatchAction } = useScenarioActions();

const { msdl } = useScenarioStore();
const selectStore = useSelectStore();

// Search query refs
type SearchResultItem = {
  label: string;
  itemId: string;
  sidc: string;
  elementName: string;
};

const searchQuery = ref<string>("");
const debouncedQuery = useDebounce(searchQuery, 200);
const searchResultsList = ref<SearchResultItem[]>([]);
const groupedItems = ref<Record<string, SearchResultItem[]>>({});

function dispatchAction(action: ScenarioAction) {
  _dispatchAction(action);
  open.value = false;
}

// Initialize query when opened
watch(open, () => {
  if (open.value) {
    queryUpdated();
  }
});

// Update autocomplete
const queryUpdated = () => {
  // Unit and Equipment maps
  const unitEntries = Object.entries(msdl.value?.unitMap || {});
  const equipmentEntries = Object.entries(msdl.value?.equipmentMap || {});

  // Provide autocomplete results based on search query
  const queryText = debouncedQuery.value.toLowerCase();
  const makeResults = (entries: [string, Unit | EquipmentItem][], elementName: string) =>
    entries
      .filter(([, item]) => item.label.toLowerCase().includes(queryText))
      .slice(0, 5)
      .map(([key, item]) => ({
        label: item.label,
        sidc: item.sidc,
        itemId: key,
        elementName,
      }));

  searchResultsList.value = [
    ...makeResults(unitEntries, "Units"),
    ...makeResults(equipmentEntries, "Equipment"),
  ];
  // Split into units and equipment
  groupedItems.value = groupByObj(searchResultsList.value, "elementName");
};

// Watch for changes to the searchQuery
watch(debouncedQuery, () => {
  queryUpdated();
});

function selectUnitOrEquipmentItem(itemId: string) {
  const activeItemId = itemId;
  if (!activeItemId) return;
  const activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
  selectStore.activeItem = activeItem;
  open.value = false;
  searchQuery.value = "";
  if (activeItem && mlMap) {
    flyToItem(activeItem, mlMap, { zoom: 10 });
    dispatchAction("LocateInOrbat");
  }
}
</script>

<template>
  <CommandDialog v-model:open="open" @update:modelValue="open = false">
    <CommandInput placeholder="Type a command or search..." v-model="searchQuery" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>

      <template v-for="(items, key) in groupedItems" :key>
        <CommandGroup v-if="items.length" :heading="key">
          <CommandItem
            v-for="item in items"
            @select="selectUnitOrEquipmentItem(item.itemId)"
            :key="item.itemId"
            :value="item.itemId"
            class="cursor-pointer"
          >
            <div class="w-8 justify-center flex">
              <MilSymbol class="size-6" :sidc="item.sidc" />
            </div>
            <div class="grid grid-cols-[auto,1fr]">
              <div>{{ item.label }}</div>
              <div class="font-light text-muted-foreground">
                {{ item.itemId }}
              </div>
            </div>
          </CommandItem>
        </CommandGroup>
      </template>

      <CommandGroup heading="Actions">
        <CommandItem value="LOCATE_IN_ORBAT" @select="dispatchAction('LocateInOrbat')">
          <ListTreeIcon />
          <span>Locate active item in ORBAT</span>
          <CommandShortcut>l</CommandShortcut>
        </CommandItem>
        <CommandItem value="COLLAPSE_ORBAT" @select="dispatchAction('CollapseOrbat')">
          <ListTreeIcon />
          <span>Collapse all ORBAT items</span>
        </CommandItem>

        <CommandItem value="CREATE_NEW_MSDL" @select="dispatchAction('CreateNewMSDL')">
          <Download />
          <span>Create new MSDL...</span>
        </CommandItem>
        <CommandItem value="LOAD_MSDL_FROM_FILE" @select="dispatchAction('LoadMSDLFromFile')">
          <Upload />
          <span>Load MSDL from file ...</span>
        </CommandItem>
        <CommandItem value="DOWNLOAD_MSDL" @select="dispatchAction('DownloadMSDL')">
          <Download />
          <span>Download MSDL</span>
        </CommandItem>
        <CommandItem value="EXPORT_KML" @select="dispatchAction('ExportKML')">
          <Download />
          <span>Export as KML/KMZ</span>
        </CommandItem>
        <CommandItem value="LOAD_FROM_URL" @select="dispatchAction('LoadFromUrl')">
          <Upload />
          <span>Load MSDL from URL ...</span>
        </CommandItem>
        <CommandItem value="EDIT_ASSOCIATIONS" @select="dispatchAction('EditAssociations')">
          <Grid3x3Icon />
          <span>Show Associations</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
    </CommandList>
  </CommandDialog>
</template>
