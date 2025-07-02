<script setup lang="ts">
import { Check, Search } from 'lucide-vue-next'
import { cn } from "@/lib/utils";
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList } from '@/components/ui/combobox'
import { useEntityTypeStore } from "@/stores/entityTypeStore";
import { storeToRefs } from "pinia";
import { watch, ref } from "vue";
import { ScrollArea } from '@/components/ui/scroll-area'

// Get props from parent
const props = defineProps<{
  populateBuilder: (entType: string) => void,         // Function to fill the dropdown lists
}>();

const store = useEntityTypeStore(); 
const {
  searchResults
} = storeToRefs(store);

// Search query refs
const searchQuery = ref<string>("");
const searchMessage = ref<string>("");
const searchSelection = ref<{ entType: string; descr: any }>();
const searchResultsList = ref<{ entType: string; descr: any }[]>([]);

// update query within the store
const queryUpdated = () => {
  store.search(searchQuery.value);
  searchResultsList.value = Object.entries(searchResults.value).map((entr) => ({ entType: entr[0], descr: entr[1] }))
};

// Watch for changes to the searchQuery
watch(searchQuery, (newVal: string) => { 
  queryUpdated() 

  if (searchQuery.value?.length > 2) searchMessage.value = 'No data available';
  else searchMessage.value = 'Query must be at least 3 characters';
});

// Call populate builder function upon click
const handleClick = async () => {
  store.resetCategories();
  await props.populateBuilder(searchSelection.value?.entType || "");
};

</script>

<template>
  <Combobox class="flex grow" v-model="searchSelection" @update:modelValue="handleClick">
    <ComboboxAnchor  class="flex grow">
      <div class="relative w-full max-w-sm items-center">
        <ComboboxInput class="pl-9" placeholder="Entity name..." v-model="searchQuery"/>
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>
    </ComboboxAnchor>

    <ComboboxList class="w-100">

      <ScrollArea class="h-100">
        <ComboboxEmpty>
          {{searchMessage}}
        </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem
            v-for="searchResult in searchResultsList"
            :key="searchResult.entType"
            :value="searchResult"
          > 
          <div class="grid grid-cols-[auto,1fr] gap-x-">
              <div>{{ searchResult.entType }}</div>
              <div class="font-light" style="color: var(--muted-foreground);">{{ searchResult.descr }}</div>
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