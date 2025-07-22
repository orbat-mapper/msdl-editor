<script setup lang="ts">
import { Accordion } from "@/components/ui/accordion";
import { useLayerStore } from "@/stores/layerStore.ts";
import CreateNewForceSideDialog from "@/components/CreateNewForceSideDialog.vue";
import { computed, ref, watchEffect } from "vue";
import { sortBy } from "@/utils.ts";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronsDownUp } from "lucide-vue-next";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import SidePanelDropdown from "@/components/SidePanelDropdown.vue";
import { useSideStore } from "@/stores/uiStore.ts";
import { useDialogStore } from "@/stores/dialogStore";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { isOrbatItemDragItem } from "@/types/draggables.ts";
import { extractInstruction } from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import SideItem from "@/components/orbat/SideItem.vue";

const {
  msdl,
  modifyScenario: { addForceSide, updateOrbatDragItems },
} = useScenarioStore();

const layerStore = useLayerStore();
const sideStore = useSideStore();
const dialogStore = useDialogStore();

const allSideIds = computed(() => msdl.value?.sides.map((s) => s.objectHandle) || []);

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
        const instruction = extractInstruction(target.data);

        if (instruction && isOrbatItemDragItem(source.data) && isOrbatItemDragItem(target.data)) {
          updateOrbatDragItems(source.data, target.data, instruction);
        }
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

function expandCollapseAll() {
  if (sideStore.openSideItems.length === allSideIds.value.length) {
    sideStore.openSideItems = [];
  } else {
    sideStore.openSideItems = allSideIds.value;
  }
}
</script>

<template>
  <header class="flex items-center justify-between px-4 mt-1">
    <h3 class="text-xs/6 font-semibold uppercase">
      Sides<span v-if="hasHiddenSides" class="ml-2 text-muted-foreground text-xs"
        >({{ sides.length }}/{{ msdl?.sides.length }})</span
      >
    </h3>
    <span>
      <TooltipProvider :delay-duration="600">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click.stop="expandCollapseAll" variant="ghost" size="icon">
              <ChevronsDownUp class="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent> Expand/collapse all sides </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SidePanelDropdown @toggleVisibility="toggleLayers" @createForceSide="createForceSide" />
    </span>
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
