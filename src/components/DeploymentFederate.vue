<script setup lang="ts">
import { Federate } from "@orbat-mapper/msdllib";
import { Check, PencilIcon, X } from "lucide-vue-next";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FederateStats from "@/components/FederateStats.vue";
import { computed, ref, useTemplateRef, watchEffect } from "vue";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { unrefElement } from "@vueuse/core";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { isUnitOrEquipmentItemDragItem } from "@/types/draggables";
import {
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { useScenarioStore } from "@/stores/scenarioStore";
import { UNALLOCATED_FEDERATE } from "@/stores/selectStore";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const props = defineProps<{
  federate: Federate;
}>();

const {
  msdl,
  modifyScenario: {
    assignEquipmentToFederate,
    assignUnitToFederate,
    removeUnitFromFederate,
    removeEquipmentFromFederate,
    updateFederate,
  },
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
    onDrop: ({ source, location }) => {
      const shiftKeyPressed = location.current.input.shiftKey;
      if (!msdl.value || !msdl.value.deployment) return;
      instruction.value = null;
      isDraggedOver.value = false;
      const data = source.data;
      if (isUnitOrEquipmentItemDragItem(data)) {
        if (props.federate.objectHandle === UNALLOCATED_FEDERATE.objectHandle) {
          if (msdl.value.getUnitById(data.item.objectHandle)) {
            removeUnitFromFederate(data.item.objectHandle, shiftKeyPressed);
          } else if (msdl.value.getEquipmentById(data.item.objectHandle)) {
            removeEquipmentFromFederate(data.item.objectHandle);
          } else {
            console.warn(`Could not unallocate item ${source.data.objectHandle}`);
          }
        } else {
          if (msdl.value.getUnitById(data.item.objectHandle)) {
            assignUnitToFederate(
              data.item.objectHandle,
              props.federate.objectHandle,
              shiftKeyPressed,
            );
          } else if (msdl.value.getEquipmentById(data.item.objectHandle)) {
            assignEquipmentToFederate(data.item.objectHandle, props.federate.objectHandle);
          } else {
            console.warn(
              `Could not assign item ${source.data.objectHandle} to ${props.federate.objectHandle}`,
            );
          }
        }
      }
    },
  });

  onCleanup(() => {
    dndFunction();
  });
});

const newName = ref("");
const isEditing = ref(false);
const isNullFederate = computed(
  () => props.federate.objectHandle === UNALLOCATED_FEDERATE.objectHandle,
);

function startRename() {
  newName.value = props.federate.name ?? "";
  isEditing.value = true;
}

function applyRename() {
  isEditing.value = false;
  updateFederate(props.federate.objectHandle, { name: newName.value });
}

function cancelRename() {
  isEditing.value = false;
}
</script>

<template>
  <TooltipProvider>
    <Tooltip :open="isDraggedOver">
      <TooltipTrigger as-child>
        <AccordionItem :value="federate.objectHandle" ref="fedRef" :class="dndClasses">
          <AccordionTrigger class="bg-card-foreground/5 py-2 rounded-none px-4 hover:no-underline">
            <div class="flex w-full items-center justify-between">
              <span v-if="!isEditing">
                {{ federate.name }}
              </span>
              <span v-else class="flex items-center gap-1">
                <Input type="text" placeholder="Federate name" v-model="newName" />
                <Button
                  variant="ghost"
                  class="size-4"
                  @click.stop="cancelRename"
                  v-if="!isNullFederate"
                  title="Cancel"
                >
                  <X class="text-white" />
                </Button>
                <Button
                  variant="ghost"
                  @click.stop="applyRename"
                  v-if="!isNullFederate"
                  title="Apply"
                >
                  <Check class="text-white" />
                </Button>
              </span>
              <Button
                variant="ghost"
                class="size-4"
                @click.stop="startRename"
                v-if="!isNullFederate"
              >
                <PencilIcon class="text-muted-foreground" />
              </Button>
            </div>
          </AccordionTrigger>
          <AccordionContent class="px-4">
            <FederateStats :federate-handle="federate.objectHandle"></FederateStats>
          </AccordionContent>
        </AccordionItem>
      </TooltipTrigger>
      <TooltipContent>
        <p>Holding shift while dropping moves all subordinates too</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
