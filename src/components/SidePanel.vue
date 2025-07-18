<script setup lang="ts">
import { Accordion } from "@/components/ui/accordion";
import { useLayerStore } from "@/stores/layerStore.ts";
import CreateNewForceSideDialog from "@/components/CreateNewForceSideDialog.vue";
import { computed, triggerRef, watchEffect } from "vue";
import { sortBy } from "@/utils.ts";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import SidePanelDropdown from "@/components/SidePanelDropdown.vue";
import { useSideStore } from "@/stores/uiStore.ts";
import { useDialogStore } from "@/stores/dialogStore";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  isEquipmentItemDragItem,
  isOrbatItemDragItem,
  isSideDragItem,
  isUnitDragItem,
} from "@/types/draggables.ts";
import {
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import SideItem from "@/components/orbat/SideItem.vue";

const {
  msdl,
  modifyScenario: { addForceSide },
} = useScenarioStore();

const layerStore = useLayerStore();
const sideStore = useSideStore();
const dialogStore = useDialogStore();

const sides = computed(() => {
  if (sideStore.hideEmptySides) {
    return sortBy(
      msdl.value?.sides.filter((side) => side.rootUnits.length > 0) ?? [],
      "name",
    ).filter((side) => side.rootUnits.length > 0);
  }
  return sortBy(msdl.value?.sides ?? [], "name");
});

const hasHiddenSides = computed(() => {
  return (sides.value?.length ?? 0) < (msdl.value?.sides.length ?? 0);
});

watchEffect((onCleanup) => {
  const dndFunction = combine(
    monitorForElements({
      onDrop(args) {
        const { location, source } = args;
        // didn't drop on anything
        if (!location.current.dropTargets.length) return;
        const target = location.current.dropTargets[0];
        const instruction: Instruction | null = extractInstruction(target.data);
        if (
          !(
            isOrbatItemDragItem(source.data) &&
            (isOrbatItemDragItem(target.data) || isSideDragItem(target.data))
          )
        ) {
          return;
        }
        if (instruction?.type === "make-child") {
          if (
            isUnitDragItem(source.data) &&
            (isUnitDragItem(target.data) || isSideDragItem(target.data))
          ) {
            const sourceUnit = msdl.value?.getUnitById(source.data.item.objectHandle);
            const targetItem = msdl.value?.getUnitOrForceSideById(target.data.item.objectHandle);
            if (!sourceUnit || !targetItem) return;
            msdl.value?.setUnitForceRelation(sourceUnit, targetItem);
            sourceUnit.setAffiliation(targetItem.getAffiliation(), { recursive: true });
          } else if (isEquipmentItemDragItem(source.data) && isUnitDragItem(target.data)) {
            console.log("not implemented yet");
          }
          triggerRef(msdl);
        }

        // if (instruction !== null) {
        //   items.value =
        //     updateTree(items.value, {
        //       type: "instruction",
        //       instruction,
        //       itemId,
        //       targetId,
        //     }) ?? [];
        // }
      },
    }),
  );

  onCleanup(() => {
    dndFunction();
  });
});

function toggleLayers() {
  if (layerStore.layers.size >= sides.value.length) {
    layerStore.layers.clear();
    return;
  }
  sides.value.forEach((side) => {
    layerStore.layers.add(side.objectHandle);
  });
}

function createForceSide() {
  dialogStore.toggleCreateForceSideDialog();
}
</script>

<template>
  <header class="flex items-center justify-between px-4 mt-1">
    <h3 class="text-xs/6 font-semibold uppercase">
      Sides<span v-if="hasHiddenSides" class="ml-2 text-muted-foreground text-xs"
        >({{ sides.length }}/{{ msdl?.sides.length }})</span
      >
    </h3>
    <SidePanelDropdown @toggleVisibility="toggleLayers" @createForceSide="createForceSide" />
  </header>
  <CreateNewForceSideDialog
    v-model:open="dialogStore.isCreateForceSideDialogOpen"
    @created="addForceSide"
  />

  <Accordion type="multiple" class="mt-2" v-model="sideStore.openSideItems">
    <SideItem
      v-for="side in sides"
      :key="side.objectHandle"
      :sideObjectHandle="side.objectHandle"
    />
  </Accordion>
  <div v-if="msdl">
    <div class="m-4">
      <Button variant="secondary" @click="toggleLayers()">Toggle all side visibilities</Button>
    </div>
  </div>
</template>
