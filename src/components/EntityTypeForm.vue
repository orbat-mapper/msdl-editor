<script setup lang="ts">
// Vue components
import { Check, ChevronsUpDown, Search } from 'lucide-vue-next'
import { computed} from 'vue'
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxTrigger } from '@/components/ui/combobox'

import { useEntityTypeStore } from "@/stores/entityTypeStore";
import { storeToRefs } from "pinia";
import { ScrollArea } from '@/components/ui/scroll-area'

// Type a single enumeration
type enumeration = {
  title: string;
  value: number;
};

// Get props from parent
const props = defineProps<{
  label: string,                    // Field label
  updateMethod: () => void,         // Method of updating the store
}>();

// Setup store refs
const store = useEntityTypeStore(); 
const refs = storeToRefs(store);

// Keys for the items map
type ItemMapKey = keyof typeof itemsMap

// All items map
const itemsMap = {
  Country: refs.countries,
  Kind: refs.kinds,
  Domain: refs.domains,
  Category: refs.categories,
  Subcategory: refs.subcategories,
  Specific: refs.specifics,
  Extra: refs.extras,
};

// Get local variables from parent
const localVariable = defineModel<number | null>()

// Display-value for the search field in the dropdowns, finding the title for the given enumeration value
const selectedKindLabel = computed(() => {
  return itemsMap[props.label as ItemMapKey].value.find((item : enumeration) => item.value === localVariable.value)?.title || '';
});

</script>

<template>
  <Combobox 
    v-model="localVariable" 
    @update:modelValue="updateMethod"
  >
    <ComboboxAnchor as-child>
      <ComboboxTrigger as-child>
        <Button variant="ghost" class="justify-between font-light size-full">
          {{ itemsMap[props.label as ItemMapKey].value.find((item : enumeration) => item.value === localVariable)?.title ?? `Unknown ${label.toLowerCase()} ${localVariable}` }}
          <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList class="font-light">
      <div class="relative w-full max-w-sm items-center">
        <ComboboxInput 
          :display-value="() => selectedKindLabel"
          class="focus-visible:ring-0 border-0 rounded-none h-10" 
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>

      <ScrollArea class="h-72">
        <ComboboxEmpty>
          No data available
        </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem
            v-for="i_item in itemsMap[props.label as ItemMapKey].value"
            :key="i_item.value"
            :value="i_item.value"
          >
            {{ i_item.title }}
            <ComboboxItemIndicator>
              <Check :class="cn('ml-auto h-4 w-4')" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ScrollArea>
    </ComboboxList>
  </Combobox>
</template>