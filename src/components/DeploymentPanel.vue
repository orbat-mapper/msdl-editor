<script setup lang="ts">
import { ChevronsUpDown, PlusIcon } from "lucide-vue-next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Deployment, Federate } from "@orbat-mapper/msdllib";
import CloseButton from "@/components/CloseButton.vue";
import { useSelectStore, UNALLOCATED_FEDERATE } from "@/stores/selectStore.ts";
import { computed, ref, type ComputedRef } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import PanelResizeHandle from "@/components/PanelResizeHandle.vue";
import { useWidthStore } from "@/stores/uiStore.ts";
import { useDialogStore } from "@/stores/dialogStore";
import CreateNewFederateDialog from "@/components/CreateNewFederateDialog.vue";
import { Accordion } from "@/components/ui/accordion";
import DeploymentFederate from "@/components/DeploymentFederate.vue";
import { useFederatesStore } from "@/stores/expandedStore";
import { storeToRefs } from "pinia";

const props = defineProps<{
  federate: Federate;
}>();

const {
  msdl,
  modifyScenario: { addFederate, createDeployment },
} = useScenarioStore();

const selectStore = useSelectStore();
const widthStore = useWidthStore();
const dialogStore = useDialogStore();
const federatesStore = useFederatesStore();
const { openItems } = storeToRefs(federatesStore);

const allFederates = computed(() => {
  return (msdl.value?.deployment?.federates || []).concat(UNALLOCATED_FEDERATE);
});

const deployment = computed(() =>
  // Fixes reactivity/caching issues
  msdl.value?.deployment ? { ...msdl.value.deployment } : undefined,
);

function createFederate() {
  dialogStore.toggleCreateFederateDialog();
}

function createNewDeployment() {
  createDeployment();
}

function openCloseAll() {
  if (openItems.value.length > 0) {
    openItems.value = [];
  } else {
    openItems.value = allFederates.value.map((f) => f.objectHandle);
  }
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
    <div
      id="create-new-federate"
      class="flex items-center pl-2 py-1 border-b border-muted-foreground/20"
      v-if="msdl?.deployment"
    >
      <Button
        variant="outline"
        size="icon"
        @click="createFederate"
        title="Create new federate"
        class="mr-1"
      >
        <PlusIcon />
      </Button>
      <ShowXMLDialog :item="deployment">XML</ShowXMLDialog>
    </div>
    <div v-else class="flex items-center flex-col pl-4 py-1 border-b border-muted-foreground/20">
      <span>No deployment present in MSDL file</span>
      <span class="my-6" id="create-deployment">
        <Button variant="secondary" class="ml-4" @click="createNewDeployment()">
          Create deployment
        </Button>
      </span>
    </div>
    <ScrollArea class="">
      <div v-if="msdl?.deployment" class="w-full pb-4">
        <header class="flex items-center justify-between pl-4 mt-1">
          <h3 class="text-xs/6 font-semibold uppercase">Federates</h3>
          <Button
            variant="ghost"
            size="icon"
            @click="openCloseAll()"
            title="Open/close all"
            class="mr-2"
          >
            <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </header>
        <CreateNewFederateDialog
          v-model:open="dialogStore.isCreateFederateDialogOpen"
          @created="addFederate"
        />
        <Accordion type="multiple" class="py-2" v-model="openItems">
          <DeploymentFederate
            v-for="federate in allFederates"
            :key="federate.objectHandle"
            :federate="federate"
          />
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
