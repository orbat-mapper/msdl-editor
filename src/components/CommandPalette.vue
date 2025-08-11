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
import { watch, ref } from "vue";
import { useDebounce } from "@vueuse/core";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";

import { Download, Upload, Grid3x3Icon, ListTreeIcon } from "lucide-vue-next";
import { type ScenarioAction, useScenarioActions } from "@/composables/scenarioActions.ts";

const open = defineModel<boolean>("open", { default: false });
const { dispatchAction: _dispatchAction } = useScenarioActions();

const { msdl } = useScenarioStore();
const selectStore = useSelectStore();

// Search query refs
type SearchResultItem = { label: string; itemId: string; sidc: string; elementName: string };

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

  // Provide autocomplete results based on searchquery
  searchResultsList.value = [...unitEntries, ...equipmentEntries]
    .filter(([, item]) => item.label.toLowerCase().includes(debouncedQuery.value.toLowerCase()))
    .slice(0, 10)
    .map(([key, item]) => ({
      label: item.label,
      sidc: item.sidc,
      itemId: key,
      elementName: item.element.localName,
    }));

  // Split into units and equipment
  groupedItems.value = {};
  searchResultsList.value.forEach((obj) => {
    groupedItems.value[obj.elementName] = groupedItems.value[obj.elementName] || [];
    groupedItems.value[obj.elementName].push(obj);
  });
};

// Watch for changes to the searchQuery
watch(debouncedQuery, (newVal: string) => {
  queryUpdated();
});

function selectItem(itemId: string) {
  const activeItemId = itemId;
  if (!activeItemId) return;
  selectStore.activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
  open.value = false;
  searchQuery.value = "";
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
            @select="selectItem(item.itemId)"
            :key="item.itemId"
            :value="item.itemId"
            class="cursor-pointer"
          >
            <div class="w-8 justify-center flex">
              <MilSymbol :sidc="item.sidc" :size="16" />
            </div>
            <div class="grid grid-cols-[auto,1fr]">
              <div>{{ item.label }}</div>
              <div class="font-light" style="color: var(--muted-foreground)">
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
