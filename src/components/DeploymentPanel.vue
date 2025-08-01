<script setup lang="ts">
import { PlusIcon } from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EquipmentItem, Federate, Unit } from "@orbat-mapper/msdllib";
import CloseButton from "@/components/CloseButton.vue";
import { useSelectStore, UNALLOCATED_FEDERATE } from "@/stores/selectStore.ts";
import { computed, onMounted, ref, useTemplateRef, watchEffect } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import PanelResizeHandle from "@/components/PanelResizeHandle.vue";
import { useWidthStore } from "@/stores/uiStore.ts";
import { unrefElement } from "@vueuse/core";
import { draggable, dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useScenarioActions } from "@/composables/scenarioActions.ts";
import { useDialogStore } from "@/stores/dialogStore";
import CreateNewFederateDialog from "@/components/CreateNewFederateDialog.vue";
import FederateStats from "@/components/FederateStats.vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const props = defineProps<{
  federate: Federate;
}>();

const fedRef = useTemplateRef("fedRef");
const isDragging = ref(false);

const {
  msdl,
  modifyScenario: { addFederate, assignUnitToFederate, assignEquipmentToFederate },
} = useScenarioStore();

const { dispatchAction } = useScenarioActions();

const selectStore = useSelectStore();
const widthStore = useWidthStore();
const dialogStore = useDialogStore();

const allFederates = computed(() => {
  return (msdl.value?.deployment?.federates || []).concat(UNALLOCATED_FEDERATE);
});

function createFederate() {
  dialogStore.toggleCreateFederateDialog();
}
</script>

<template>
  <Card
    class="text-sm bg-sidebar gap-0 backdrop-blur-lg relative overflow-auto"
    :style="{ width: widthStore.detailsWidth + 'px' }"
  >
    <header class="px-4 h-10 mt-4 flex justify-between">
      <span class="text-base font-bold">Federates</span>
      <div class="font-small text-muted-foreground">
        Size: {{ msdl?.deployment?.federates.length || 0 }}
      </div>
    </header>
    <div class="flex items-center pl-2 py-1 border-b border-muted-foreground/20">
      <Button variant="ghost" size="icon" @click="createFederate" title="Create new federate">
        <PlusIcon />
      </Button>
      <ShowXMLDialog :item="msdl?.deployment ?? { element: undefined }">XML</ShowXMLDialog>
    </div>
    <ScrollArea class="" ref="fedRef">
      <div v-if="msdl?.deployment" class="w-full">
        <header class="flex items-center justify-between px-4 mt-1">
          <h3 class="text-xs/6 font-semibold uppercase">Federates</h3>
        </header>
        <CreateNewFederateDialog
          v-model:open="dialogStore.isCreateFederateDialogOpen"
          @created="addFederate"
        />
        <Accordion type="multiple" class="mt-2">
          <AccordionItem
            v-for="federate in allFederates"
            :key="federate.objectHandle"
            :value="federate.objectHandle"
          >
            <AccordionTrigger class="bg-card-foreground/5 py-2 rounded-none px-4">
              {{ federate.name }}
            </AccordionTrigger>
            <AccordionContent class="px-4">
              <FederateStats :federate-handle="federate.objectHandle"></FederateStats>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollArea>
    <CloseButton class="absolute right-4 top-2" @click="selectStore.clearActiveFederate()" />
    <PanelResizeHandle
      left
      :width="widthStore.detailsWidth"
      @update="widthStore.detailsWidth = $event"
      @reset="widthStore.resetDetailsWidth()"
    />
  </Card>
</template>
