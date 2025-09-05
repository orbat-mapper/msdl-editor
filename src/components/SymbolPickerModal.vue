<script setup lang="ts">
import NewSimpleModal from "@/components/NewSimpleModal.vue";
import SymbolCodeSelect from "./SymbolCodeSelect.vue";
import SymbolCodeViewer from "./SymbolCodeViewer.vue";
import { useDebounce, useVModel } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSymbolItems } from "@/composables/symbolDataB";
import { computed, ref, watchEffect, triggerRef } from "vue";
import { Check } from "lucide-vue-next";
import { SidcB } from "@/symbology/sidc";
import TabItem from "./TabItem.vue";
import TabView from "./TabView.vue";
import SymbolCodeMultilineSelect from "./SymbolCodeMultilineSelect.vue";
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
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSymbologySearch } from "@/composables/symbolSearchingB";
import { useSelectStore } from "@/stores/selectStore.ts";
import { isUnitOrEquipment } from "@/utils.ts";
import EditFieldToggle from "./EditFieldToggle.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";

interface Props {
  isVisible?: boolean;
  sidc?: string;
  dialogTitle?: string;
  initialTab?: number;
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true,
  dialogTitle: "Symbol picker",
});

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
  isLoaded,
  battleDimensionItems,
  statusItems,
  hqtfdItems,
  echelonItems,
  mainIconItems,
  loadData,
  isGroundUnit,
  isGroundEquipment,
  isGroundInstallation,
  isSeaSurface,
  isSeaSubsurface,
  isGraphicsCommandAndControl,
  isSigIntGround,
  isStabOpNonMilGroup,
} = useSymbolItems(computed(() => props.sidc || ""));
loadData();

const open = useVModel(props, "isVisible");
const currentTab = ref(props.initialTab ?? 0);
const hitCount = ref(0);
const searchQuery = ref("");
const debouncedQuery = useDebounce(searchQuery, 100);
const searchSelection = ref<{ sidc: string }>();
const dimension = ref();
const groupedHits = ref<ReturnType<typeof search>["groups"]>();
const { search } = useSymbologySearch(affiliationValue);
const selectStore = useSelectStore();
const { msdl } = useScenarioStore();

const emit = defineEmits(["update:isVisible", "update:sidc", "cancel"]);

// Values returned by getModalSidc
const onSubmit = () => {
  emit("update:sidc", {
    sidc: csidc.value,
  });
  open.value = false;
};

// remove empty values in object
const cleanObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === "object") cleanObject(obj[key]);
    else if (obj[key] === "" || obj[key] === null || obj[key] === undefined) delete obj[key];
  });
  return obj;
};

function createDimensionCode() {
  let functionType = "*";
  let modifier = "*";
  if (isGroundUnit()) {
    functionType = "U";
  } else if (isGroundEquipment()) {
    functionType = "E";
  } else if (isGroundInstallation()) {
    functionType = "I";
    modifier = "H";
  } else if (isGraphicsCommandAndControl()) {
    functionType = "G";
  } else if (isSigIntGround()) {
    functionType = "S";
  } else if (isStabOpNonMilGroup()) {
    functionType = "A";
  }

  dimension.value =
    codingSchemeValue.value +
    "*" +
    battleDimensionValue.value +
    "*" +
    functionType +
    "*****" +
    modifier;
}
createDimensionCode();

// Handle correct functionality of other dropdown fields if dimension changes
function setDimension(): void {
  let code = dimension.value.replaceAll("*", "-");

  codingSchemeValue.value = code[0];
  battleDimensionValue.value = code[2];
  functionIdValue.value = code.slice(4, 10);
  modifier2Value.value = "-";

  if (isGroundUnit()) {
    modifier1Value.value = "-";
  } else if (isGroundEquipment()) {
    modifier1Value.value = "M";
  } else if (isGroundInstallation()) {
    modifier1Value.value = "H";
  } else if (isSeaSurface() || isSeaSubsurface()) {
    modifier1Value.value = "N";
  } else {
    modifier1Value.value = "-";
  }
}

function onSelect(hit: { sidc: string }) {
  updateModalSymbol(hit.sidc);
}

function onSearch() {
  if (!searchSelection.value?.sidc) return;
  updateModalSymbol(searchSelection.value?.sidc);
}

function updateModalSymbol(sidc: string): void {
  const newSidc = new SidcB(sidc);
  codingSchemeValue.value = newSidc.codingScheme;
  battleDimensionValue.value = newSidc.battleDimension;
  statusValue.value = newSidc.status == "-" ? "P" : newSidc.status;
  contextValue.value = newSidc.context;
  modifier1Value.value = newSidc.modifier1;
  modifier2Value.value = newSidc.modifier2;
  echelonValue.value = newSidc.echelon;
  functionIdValue.value = newSidc.functionId;

  createDimensionCode();
}

function updateName(hit: { newValue: string }) {
  selectStore.updateName(hit.newValue);
  triggerRef(msdl); // Required to update map label
}

// Update the hitcount and groupedhits if the search query changes
watchEffect(() => {
  const { numberOfHits, groups } = search(debouncedQuery.value);
  hitCount.value = numberOfHits;
  groupedHits.value = groups;
});
</script>

<template>
  <NewSimpleModal
    v-if="isLoaded"
    v-model="open"
    :dialog-title="dialogTitle"
    @cancel="emit('cancel')"
    class="md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)"
  >
    <div class="flex h-full flex-col" @keyup.ctrl.enter="onSubmit">
      <header class="mt-4 flex h-20 w-full items-center justify-between">
        <div class="flex">
          <MilSymbol :sidc="csidc" :key="csidc" :size="34" />
          <div v-if="selectStore.activeItem">
            <span
              v-if="isUnitOrEquipment(selectStore.activeItem)"
              class="pl-8 items-center flex text-base font-bold"
            >
              <EditFieldToggle :field="selectStore.activeItem.name" @update="updateName" />
            </span>
          </div>
        </div>
        <SymbolCodeViewer :sidc="csidc" @update="onSelect" />
      </header>

      <TabView class="flex-auto" v-model:current-tab="currentTab">
        <TabItem
          label="Select"
          v-slot="{ isActive }"
          class="max-h-[50vh] overflow-auto sm:max-h-[60vh]"
        >
          <Combobox v-model="searchSelection" @update:modelValue="onSearch" class="flex mb-4">
            <ComboboxAnchor class="grow">
              <div class="w-full">
                <ComboboxInput
                  v-model="searchQuery"
                  class="h-12 border-0 bg-transparent pr-4 pl-11 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  ref="searchInputRef"
                />
              </div>
            </ComboboxAnchor>

            <ComboboxList class="md:w-(--breakpoint-md) lg:w-(--breakpoint-lg)">
              <ComboboxEmpty> No framework found. </ComboboxEmpty>

              <ScrollArea>
                <ComboboxGroup>
                  <li v-for="[source, hits] in groupedHits" style="list-style: none">
                    <h2 class="text-xs font-semibold">{{ source }}</h2>
                    <ul class="text-sm font-medium">
                      <ComboboxItem v-for="item in hits" :key="item.sidc" :value="item">
                        <li :class="['flex cursor-default items-center px-4 py-2 select-none']">
                          <div class="relative flex w-12 justify-center">
                            <MilSymbol :sidc="item.sidc" :size="30" aria-hidden="true" />
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
            </ComboboxList>
          </Combobox>

          <form
            class="space-y-4 p-0.5"
            @submit.prevent="onSubmit"
            v-if="isLoaded"
            @keydown.ctrl.enter.exact="onSubmit"
            @keydown.meta.enter.exact="onSubmit"
          >
            <div class="flex w-full items-end gap-1">
              <SymbolCodeSelect
                class="flex-auto"
                v-model="dimension"
                label="Battle Dimension"
                :items="battleDimensionItems"
                @update:modelValue="setDimension"
              />
            </div>

            <SymbolCodeSelect v-model="statusValue" label="Status" :items="statusItems" />

            <SymbolCodeSelect
              v-model="modifier2Value"
              label="Echelon / Mobility / Towed array"
              :items="echelonItems"
            />

            <SymbolCodeSelect
              v-model="modifier1Value"
              label="Headquaters / Task force / Dummy"
              :items="hqtfdItems"
            />

            <SymbolCodeMultilineSelect
              v-model="functionIdValue"
              label="Main icon"
              :items="mainIconItems"
            />
          </form>
        </TabItem>
      </TabView>

      <div class="flex shrink-0 justify-end space-x-2 pt-4">
        <Button @click="onSubmit()" class="">Select symbol</Button>
      </div>
    </div>
  </NewSimpleModal>
</template>
