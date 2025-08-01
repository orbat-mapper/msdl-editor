<script setup lang="ts">
import {
  ArrowUpIcon,
  FocusIcon,
  LocateFixedIcon,
  ListTreeIcon as LocateOrbatIcon,
} from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsmod";
import { Button } from "@/components/ui/button";
import { EquipmentItem, ForceSide, Unit } from "@orbat-mapper/msdllib";
import CloseButton from "@/components/CloseButton.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import { computed, ref, useTemplateRef, watchEffect } from "vue";
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
import DetailsPanelEquipment from "@/components/DetailsPanelEquipment.vue";
import { unrefElement } from "@vueuse/core";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { getEquipmentItemDragItem, getUnitDragItem } from "@/types/draggables.ts";
import { mapItem } from "@/components/orbat/utils.ts";
import DetailsPanelUnit from "@/components/DetailsPanelUnit.vue";
import DetailsPanelEquipmentList from "@/components/DetailsPanelEquipmentList.vue";
import DetailsPanelDisposition from "@/components/DetailsPanelDisposition.vue";
import { useScenarioActions } from "@/composables/scenarioActions.ts";

const props = defineProps<{
  item: Unit | EquipmentItem | ForceSide;
  mlMap: maplibregl.Map;
}>();

const emit = defineEmits(["flyTo"]);

const elRef = useTemplateRef("elRef");
const isDragging = ref(false);

const {
  msdl,
  isNETN,
  modifyScenario: { updateItemLocation },
} = useScenarioStore();

const { dispatchAction } = useScenarioActions();

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

watchEffect((onCleanup) => {
  const el = unrefElement(elRef.value) as HTMLElement | null;
  if (!el) return;
  const dndFunction = draggable({
    element: el,
    getInitialData: () => {
      if (isUnit(props.item)) {
        return getUnitDragItem({ item: mapItem(props.item) });
      } else if (isEquipmentItem(props.item)) {
        return getEquipmentItemDragItem({ item: mapItem(props.item) });
      }
      return {};
    },
    onDragStart: () => {
      isDragging.value = true;
    },
    onDrop: () => {
      isDragging.value = false;
    },
  });

  onCleanup(() => dndFunction());
});

function goUp() {
  if (isUnitOrEquipment(props.item)) {
    const parentItem =
      msdl.value?.getUnitOrForceSideById(props.item.superiorHandle) ??
      msdl.value?.getEquipmentById(props.item.superiorHandle);
    if (!parentItem) return;
    selectStore.activeItem = parentItem;
  } else if (isForceSide(props.item)) {
    const parentItem = msdl.value?.getForceSideById(props.item.allegianceHandle || "");
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
        <span ref="elRef"><MilSymbol :sidc="item.sidc" :key="item.sidc" :size="16" /></span>
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
      <Button
        v-if="isUnitOrEquipment(item)"
        variant="ghost"
        size="icon"
        @click="startGetLocation()"
        :disabled="isGetLocationActive"
        title="Set location of item"
        ><LocateFixedIcon
      /></Button>
      <Button
        variant="ghost"
        size="icon"
        title="Locate in ORBAT"
        @click="dispatchAction('LocateInOrbat')"
        ><LocateOrbatIcon
      /></Button>
      <ShowXMLDialog :item="item">XML</ShowXMLDialog>
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
            <DetailsPanelUnit v-else-if="isUnit(item)" :item />
            <DetailsPanelEquipment v-else-if="isEquipmentItem(item)" :item />
            <DetailsPanelDisposition :item="item" v-if="isUnitOrEquipment(item)" />
          </TabsContent>
          <TabsContent v-if="isUnit(item)" value="equipment" class="p-4">
            <DetailsPanelEquipmentList :item="item" @flyTo="emit('flyTo', $event)" />
          </TabsContent>
          <TabsContent v-if="isNETN && isUnitOrEquipment(item)" value="holdings" class="p-4">
            <DetailsPanelHoldings :item="item" />
          </TabsContent>
          <TabsContent v-if="isUnit(item)" value="model">
            <div class="max-w-[40vw]">
              <div class="p-4 overflow-auto">
                <UnitModelPanel :unit="item"></UnitModelPanel>
              </div>
            </div>
          </TabsContent>
          <TabsContent v-if="isEquipmentItem(item)" value="model">
            <div class="max-w-[40vw]">
              <div class="p-4 overflow-auto">
                <EquipmentItemModelPanel :equipment="item"></EquipmentItemModelPanel>
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
