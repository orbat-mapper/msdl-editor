<script setup lang="ts">
import { Federate } from "@orbat-mapper/msdllib";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FederateStats from "@/components/FederateStats.vue";
import { computed, ref, useTemplateRef, watchEffect } from "vue";
import { unrefElement } from "@vueuse/core";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  isOrbatItemDragItem,
  isSideDragItem,
  isUnitOrEquipmentItemDragItem,
} from "@/types/draggables";
import {
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { useScenarioStore } from "@/stores/scenarioStore";

const props = defineProps<{
  federate: Federate;
}>();

const {
  msdl,
  modifyScenario: { assignEquipmentToFederate, assignUnitToFederate },
} = useScenarioStore();

const fedRef = useTemplateRef("fedRef");
const isDraggedOver = ref(false);
const instruction = ref<Extract<
  Instruction,
  { type: "reorder-above" | "reorder-below" | "make-child" }
> | null>(null);

const dndClasses = computed(() => ({
  "last:border-b-2 border-2 border-blue-500": isDraggedOver.value,
}));

watchEffect((onCleanup) => {
  const fedElement = unrefElement(fedRef.value);
  if (!fedElement) return;

  const dndFunction = dropTargetForElements({
    element: fedElement,
    canDrop: ({ source }) => {
      if (isUnitOrEquipmentItemDragItem(source.data)) {
        return true;
      }
      return false;
    },
    onDrag: ({ self }) => {
      instruction.value = extractInstruction(self.data) as typeof instruction.value;
    },
    onDragEnter: ({ source }) => {
      isDraggedOver.value = true;
    },
    onDragLeave: () => {
      isDraggedOver.value = false;
      instruction.value = null;
    },
    onDrop: ({ source }) => {
      instruction.value = null;
      isDraggedOver.value = false;
      let data = source.data;
      if (isUnitOrEquipmentItemDragItem(data)) {
        if (msdl.value?.getUnitById(data.item.objectHandle)) {
          assignUnitToFederate(data.item.objectHandle, props.federate.objectHandle);
        } else if (msdl.value?.getEquipmentById(data.item.objectHandle)) {
          assignEquipmentToFederate(data.item.objectHandle, props.federate.objectHandle);
        } else {
          console.warn(`Could not assign item ${source.data.objectHandle}`);
        }
      }
    },
  });

  onCleanup(() => {
    dndFunction();
  });
});
</script>

<template>
  <AccordionItem :value="federate.objectHandle" ref="fedRef" :class="dndClasses">
    <AccordionTrigger class="bg-card-foreground/5 py-2 rounded-none px-4">
      {{ federate.name }}
    </AccordionTrigger>
    <AccordionContent class="px-4">
      <FederateStats :federate-handle="federate.objectHandle"></FederateStats>
    </AccordionContent>
  </AccordionItem>
</template>
