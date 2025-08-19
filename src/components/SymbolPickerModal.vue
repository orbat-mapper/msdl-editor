<script setup lang="ts">
import NewSimpleModal from "@/components/NewSimpleModal.vue";
import {
  mapReinforcedStatus2Field,
  type ReinforcedStatus,
  type UnitSymbolOptions,
} from "@/types/scenarioModels";
import {
  breakpointsTailwind,
  useBreakpoints,
  useDebounce,
  useVModel,
  whenever,
} from "@vueuse/core";
import { Button } from "@/components/ui/button";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSymbolItems } from "@/composables/symbolDataB";
import { computed, defineAsyncComponent, nextTick, ref, watch, watchEffect } from "vue";
import { SidcB } from "@/symbology/sidc";
import TabView from "./TabView.vue";
import TabItem from "./TabItem.vue";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  type MainIconSearchResult,
  type ModifierOneSearchResult,
  type ModifierTwoSearchResult,
  useSymbologySearch,
} from "@/composables/symbolSearchingB";


interface Props {
  isVisible?: boolean;
  sidc?: string; //<< initialSidcModalValue
  dialogTitle?: string;
  hideModifiers?: boolean;
  hideSymbolColor?: boolean;
  inheritedSymbolOptions?: UnitSymbolOptions;
  symbolOptions?: UnitSymbolOptions;
  initialTab?: number;
  reinforcedStatus?: ReinforcedStatus;
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true,
  dialogTitle: "Symbol picker",
  hideModifiers: false,
  hideSymbolColor: false,
});

const currentTab = ref(props.initialTab ?? 0);

const emit = defineEmits(["update:isVisible", "update:sidc", "cancel"]);
const hitCount = ref(0);
const open = useVModel(props, "isVisible");

// TODO: find a better solution for this
const componentKey = ref(0);

const internalSymbolOptions = ref<UnitSymbolOptions>({
  ...(props.symbolOptions || {}),
});

const combinedSymbolOptions = computed(() => ({
  ...(props.inheritedSymbolOptions || {}),
  ...cleanObject(internalSymbolOptions.value || {}),
}));

const finalSymbolOptions = computed(() => ({
  ...combinedSymbolOptions.value,
  ...cleanObject({
    reinforcedReduced: mapReinforcedStatus2Field(reinforcedReducedValue.value),
  }),
}));

const searchQuery = ref("");
const debouncedQuery = useDebounce(searchQuery, 100);

// Values returned by getModalSidc
const onSubmit = () => {
  emit("update:sidc", {
    sidc: csidc.value,
    // reinforcedStatus: 'hoiiiii',
    // reinforcedStatus: reinforcedReducedValue.value,
    // symbolOptions: internalSymbolOptions.value.fillColor
    //   ? { fillColor: internalSymbolOptions.value.fillColor }
    //   : {},
  });
  open.value = false;
};

// remove empty values in object
const cleanObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === "object") cleanObject(obj[key]);
    else if (obj[key] === "" || obj[key] === null || obj[key] === undefined)
      delete obj[key];
  });
  return obj;
};

// function updateFromSidcInput(sidc: string) {
//   if (!/^\d+$/.test(sidc)) {
//     return;
//   }
//   const oldSidc = new Sidc(csidc.value);
//   const ns = new Sidc(sidc);
//   ns.standardIdentity = oldSidc.standardIdentity;

//   csidc.value = ns.toString();
// }

// function clearModifiers() {
//   mod1Value.value = "00";
//   mod2Value.value = "00";
//   emtValue.value = "00";
//   hqtfdValue.value = "0";
// }


// !!!!!!! uses the B variant
const {
  affiliationValue,
  csidc,
  codingSchemeValue,
  battleDimensionValue,
  statusValue,
  functionIdValue,
  contextValue,
  modifier1Value,
  modifier2Value,
  echelonValue,

  loadData,
  // isLoaded,
  // sidValue,
  // symbolSetValue,
  // iconValue,
  // statusValue,
  // statusItems,
  // hqtfdItems,
  // hqtfdValue,
  // emtValue,
  // emtItems,
  // mod1Value,
  // mod2Value,
  // mod1Items,
  // mod2Items,
  // icons,
  // symbolSets,
  // reinforcedReducedItems,
  reinforcedReducedValue,
} = useSymbolItems(
  computed(() => props.sidc || ""),
  props.reinforcedStatus,
);
loadData();

function onSelect(
  hit: MainIconSearchResult | ModifierOneSearchResult | ModifierTwoSearchResult,
) {
  const newSidc = new SidcB(hit.sidc);

  // Set the symbol of the modal
  codingSchemeValue.value = newSidc.codingScheme; 
  battleDimensionValue.value = newSidc.battleDimension
  statusValue.value = newSidc.status
  functionIdValue.value = newSidc.functionId
  contextValue.value = newSidc.context
  modifier1Value.value = newSidc.modifier1
  modifier2Value.value = newSidc.modifier2
  echelonValue.value = newSidc.echelon

  // Rerender MilSymbol in the header
  // TODO : Should find a better solution for this
  componentKey.value++;
}

// Groupedhits is the return of the search() function, accessing the groups property
const groupedHits = ref<ReturnType<typeof search>["groups"]>();

const { search } = useSymbologySearch(affiliationValue);

// Update the hitcount and groupedhits if the search query changes
watchEffect(() => {
  const { numberOfHits, groups } = search(debouncedQuery.value);
  hitCount.value = numberOfHits;
  groupedHits.value = groups;
});

</script>

<template>
  <NewSimpleModal
    v-model="open"
    :dialog-title="dialogTitle"
    @cancel="emit('cancel')"
    class="md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)"
  >
    <div class="flex h-full flex-col" @keyup.ctrl.enter="onSubmit">
      <header class="mt-4 flex h-20 w-full items-center justify-between">
        <MilSymbol :sidc="csidc" :size="34" :options="finalSymbolOptions" :key="componentKey"/>
        <!-- <SymbolCodeViewer :sidc="csidc" @update="updateFromSidcInput" /> allow an input field -->
      </header>

      <TabView class="flex-auto" v-model:current-tab="currentTab">
        <TabItem
          label="Select"
          v-slot="{ isActive }"
          class="max-h-[50vh] overflow-auto sm:max-h-[60vh]"
        >
          <Combobox @update:modelValue="onSelect">
            <div class="relative">
              <div class="relative">
                <!-- <MagnifyingGlassIcon
                  class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> -->
                <ComboboxInput
                  v-model="searchQuery"
                  class="h-12 w-full border-0 bg-transparent pr-4 pl-11 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  ref="searchInputRef"
                />
              </div>

              <ScrollArea class="h-72">
                <ComboboxEmpty> No data available </ComboboxEmpty>

                <ComboboxGroup>
                  <li v-for="[source, hits] in groupedHits">
                    <h2 class="text-xs font-semibold" style="color: red;">{{ source }}</h2>
                    <ul class="text-sm font-medium">
                      <ComboboxItem
                        v-for="item in hits" 
                        :key="item.sidc"
                        :value="item"
                      >
                      <!-- <li
                        :class="[
                          'flex cursor-default items-center px-4 py-2 select-none',
                          active ? 'bg-army text-white' : 'even:bg-gray-100',
                        ]"
                      > -->
                                           <li
                        :class="[
                          'flex cursor-default items-center px-4 py-2 select-none',
                          ,
                        ]"
                      >
                        <div class="relative flex w-12 justify-center">
                          <MilSymbol
                            :sidc="item.sidc"
                            :size="30"
                            aria-hidden="true"
                            :options="{
                              ...combinedSymbolOptions,
                              outlineColor: 'white',
                              outlineWidth: 4,
                            }"
                          />
                        </div>
                        <p
                          class="ml-3 flex-auto truncate"
                          v-html="item.highlight ? item.highlight : item.text"
                        />
                      </li>
                        <ComboboxItemIndicator>
                          <Check :class="cn('ml-auto h-4 w-4')" />
                        </ComboboxItemIndicator>
                      </ComboboxItem>
                    </ul>
                  </li>
                </ComboboxGroup>
              </ScrollArea>
              </div
          ></Combobox>
          <!-- Vanaf hier die dropdowns -->
        </TabItem>
         <TabItem label="Browse" v-slot="{ isActive }">
          <keep-alive>
          </keep-alive>
        </TabItem>

      </TabView>
      
      <div class="flex shrink-0 justify-end space-x-2 pt-4">
        <!-- <Button type="button" @click="clearModifiers()" class=""
          >Clear modifiers
        </Button> -->
        <Button @click="onSubmit()" class="">Select symbol</Button>
      </div>
   

    </div> 
  </NewSimpleModal>
</template>

