<script setup lang="ts">
import { ArrowUpIcon, FocusIcon, LocateFixedIcon } from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsmod";
import { Button } from "@/components/ui/button";
import { EquipmentItem, ForceSide, Unit } from "@orbat-mapper/msdllib";
import CloseButton from "@/components/CloseButton.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import { computed } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import DetailsPanelHoldings from "@/components/DetailsPanelHoldings.vue";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import UnitModelPanel from "@/components/UnitModelPanel.vue";
import EquipmentItemModelPanel from "@/components/EquipmentItemModelPanel.vue";
import { isEquipmentItem, isForceSide, isUnit, isUnitOrEquipment } from "@/utils.ts";
import DetailsPanelForceSide from "@/components/DetailsPanelForceSide.vue";
import { useGetMapLocation } from "@/composables/geoMapLocation.ts";
import PanelResizeHandle from "@/components/PanelResizeHandle.vue";
import { useWidthStore } from "@/stores/uiStore.ts";

const props = defineProps<{
  item: Unit | EquipmentItem | ForceSide;
  mlMap: maplibregl.Map;
}>();

const emit = defineEmits(["flyTo"]);

const {
  msdl,
  isNETN,
  modifyScenario: { updateItemLocation },
} = useScenarioStore();

const selectStore = useSelectStore();
const widthStore = useWidthStore();
const {
  start: startGetLocation,
  isActive: isGetLocationActive,
  onGetLocation,
  cancel: cancelGetLocation,
} = useGetMapLocation(props.mlMap);

onGetLocation((location) => {
  updateItemLocation(props.item.objectHandle, location);
});

const typeLabel = computed(() => {
  if (isUnit(props.item)) {
    return "Unit";
  }
  if (isEquipmentItem(props.item)) {
    return "Equipment";
  }

  if (isForceSide(props.item)) {
    if (props.item.isSide) {
      return "Side";
    }
    return "Force";
  }
  return "Item";
});

function goUp() {
  if (isUnitOrEquipment(props.item)) {
    const parentItem =
      msdl.value?.getUnitOrForceSideById(props.item.superiorHandle) ??
      msdl.value?.getEquipmentById(props.item.superiorHandle);
    if (!parentItem) return;
    selectStore.activeItem = parentItem;
  } else if (isForceSide(props.item)) {
    const parentItem = msdl.value?.getForceSideById(props.item.allegianceHandle);
    if (!parentItem) return;
    selectStore.activeItem = parentItem;
  }
}
</script>

<template>
  <Card
    class="text-sm bg-sidebar gap-0 backdrop-blur-lg relative overflow-auto"
    :style="{ width: widthStore.detailsWidth + 'px' }"
  >
    <header class="px-4 h-10 mt-4 flex justify-between">
      <div v-if="isUnitOrEquipment(item)" class="flex gap-2">
        <MilSymbol :sidc="item.sidc" :key="item.sidc" :size="16" />
        <span class="text-base font-bold">{{ item.label }}</span>
      </div>
      <span v-else class="text-base font-bold">{{ item.name }}</span>
      <div>
        <Badge>{{ typeLabel }}</Badge>
      </div>
    </header>
    <div class="flex items-center pl-2 py-1 border-b border-muted-foreground/20">
      <Button variant="ghost" size="icon" @click="emit('flyTo', item)" title="Zoom to item"
        ><FocusIcon
      /></Button>
      <Button variant="ghost" size="icon" @click="goUp" title="Go to parent"
        ><ArrowUpIcon
      /></Button>
      <ShowXMLDialog :item="item">XML</ShowXMLDialog>
      <Button
        v-if="isUnitOrEquipment(item)"
        variant="ghost"
        size="icon"
        @click="startGetLocation()"
        :disabled="isGetLocationActive"
        title="Get location of item"
        ><LocateFixedIcon
      /></Button>
    </div>
    <Tabs default-value="info" class="mt-0">
      <TabsList class="w-full flex">
        <TabsTrigger value="info">Details</TabsTrigger>
        <TabsTrigger v-if="isUnit(item)" value="equipment"
          >Equipment
          <Badge class="px-1 py-0 text-xs rounded-full">{{ item.equipment.length }}</Badge>
        </TabsTrigger>
        <TabsTrigger v-if="isUnitOrEquipment(item)" value="model">Model</TabsTrigger>
        <TabsTrigger v-if="isNETN && isUnitOrEquipment(item)" value="holdings"
          >Holdings
          <Badge class="ml-0 px-1 py-0 text-xs rounded-full">{{
            item.holdings.length
          }}</Badge></TabsTrigger
        >
      </TabsList>
      <ScrollArea class="">
        <div class="max-h-[50vh] min-w-96">
          <TabsContent value="info" class="p-4">
            <DetailsPanelForceSide :item="item" v-if="isForceSide(item)" />
            <Button
              v-else-if="isUnitOrEquipment(item)"
              :disabled="!item.location"
              @click="emit('flyTo', item)"
              variant="outline"
              >Fly to</Button
            >
          </TabsContent>
          <TabsContent v-if="isUnit(item)" value="equipment" class="p-4">
            <ul class="list-disc pl-4">
              <li
                v-for="eq in item.equipment"
                :key="eq.objectHandle"
                class="flex items-center gap-2"
              >
                <MilSymbol :sidc="eq.sidc" :size="16" />
                <Button variant="link" size="sm" @click="emit('flyTo', eq)">{{ eq.label }}</Button>
              </li>
            </ul>
          </TabsContent>
          <TabsContent v-if="isNETN && isUnitOrEquipment(item)" value="holdings" class="p-4">
            <DetailsPanelHoldings :item="item" />
          </TabsContent>
          <TabsContent v-if="isUnit(item)" value="model">
            <div class="max-w-[40vw]">
              <div class="bg-muted p-2 overflow-auto">
                <UnitModelPanel :unit="item"> </UnitModelPanel>
              </div>
            </div>
          </TabsContent>
          <TabsContent v-if="isEquipmentItem(item)" value="model">
            <div class="max-w-[40vw]">
              <div class="bg-muted p-2 overflow-auto">
                <EquipmentItemModelPanel :equipment="item"> </EquipmentItemModelPanel>
              </div>
            </div>
          </TabsContent>
        </div>
      </ScrollArea>
    </Tabs>
    <CloseButton class="absolute right-4 top-2" @click="selectStore.clearActiveItem()" />
    <div
      v-if="isGetLocationActive"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded"
    >
      <div class="p-4 bg-background">
        <span>Click on map to set location</span>
        <Button variant="link" type="button" @click="cancelGetLocation()">Cancel</Button>
      </div>
    </div>
    <PanelResizeHandle
      left
      :width="widthStore.detailsWidth"
      @update="widthStore.detailsWidth = $event"
      @reset="widthStore.resetDetailsWidth()"
    />
  </Card>
</template>
