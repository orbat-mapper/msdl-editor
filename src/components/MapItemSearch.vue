<script setup lang="ts">
import { Check, Search } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from "@/components/ui/combobox";
import { watch, ref } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import { useDebounce } from "@vueuse/core";
import { Button } from "@/components/ui/button";

const { msdl } = useScenarioStore();
const selectStore = useSelectStore();

// Search query refs
const searchQuery = ref<string>("");
const debouncedQuery = useDebounce(searchQuery, 200);
const searchSelection = ref<{ label: string; itemId: string; sidc: string }>();
const searchResultsList = ref<{ label: string; itemId: string; sidc: string }[]>([]);

// update autocomplete
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
    }));
};

// Watch for changes to the searchQuery
watch(debouncedQuery, (newVal: string) => {
  queryUpdated();
});

// Select new active item upon click
const handleClick = async () => {
  const activeItemId = searchSelection.value?.itemId;
  if (!activeItemId) return;
  selectStore.activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
};
</script>

<template>
  <Combobox class="flex grow" v-model="searchSelection" @update:modelValue="handleClick">
    <ComboboxAnchor class="flex grow">
      <div class="relative w-full max-w-sm items-center">
        <ComboboxInput
          class="pl-9"
          placeholder="Search unit or equipment name..."
          v-model="searchQuery"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>
    </ComboboxAnchor>

    <ComboboxList class="w-100">
      <ScrollArea class="h-100">
        <ComboboxEmpty> No data available </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem
            v-for="searchResult in searchResultsList"
            :key="searchResult.itemId"
            :value="searchResult"
            class="cursor-pointer"
          >
            <div class="w-8 justify-center flex">
              <MilSymbol :sidc="searchResult.sidc" :size="16"/>
            </div>

            <div class="grid grid-cols-[auto,1fr] gap-x-">
              <div>{{ searchResult.label }}</div>
              <div class="font-light" style="color: var(--muted-foreground)">
                {{ searchResult.itemId }}
              </div>
            </div>
            <ComboboxItemIndicator>
              <Check :class="cn('ml-auto h-4 w-4')" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ScrollArea>
    </ComboboxList>
  </Combobox>
</template>
