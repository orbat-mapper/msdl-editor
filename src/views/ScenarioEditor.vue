<script setup lang="ts">
import MaplibreMap from "@/components/MaplibreMap.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import CreateNewScenarioDialog from "@/components/CreateNewScenarioDialog.vue";
import LoadFromUrlDialog from "@/components/LoadFromUrlDialog.vue";
import { useDialogStore } from "@/stores/dialogStore.ts";
import { ref, shallowRef, useTemplateRef } from "vue";
import { MilitaryScenario } from "@orbat-mapper/msdllib";
import maplibregl from "maplibre-gl";
import MapLogic from "@/components/MapLogic.vue";
import LeftPanel from "@/components/LeftPanel.vue";
import RightPanel from "@/components/RightPanel.vue";
import { useFileDropZone } from "@/composables/filedragdrop.ts";
import DropZoneIndicator from "@/components/DropZoneIndicator.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { progress } from "@/composables/progress.ts";
import { GlobalEvents } from "vue-global-events";
import { inputEventFilter } from "@/utils.ts";
import CommandPalette from "@/components/CommandPalette.vue";
import EditAssociationsDialog from "@/components/EditAssociationsDialog.vue";

const { createScenario, loadScenario, msdl, undo, redo } = useScenarioStore();

const mlMap = shallowRef<maplibregl.Map>();
const showSearch = ref(false);

const dropZoneRef = useTemplateRef("dropZoneRef");

const dialogStore = useDialogStore();

function onMapReady(map: maplibregl.Map) {
  mlMap.value = map;
}

if (import.meta.env.DEV) {
  const loadExampleScenario = async () => {
    progress.start();
    const url = "/examples/MSDL-example.xml";
    // const url = "/examples/SampleMSDL.xml";
    // const url = "/examples/example3.xml";
    try {
      const response = await fetch(url);
      const msdlAsText = await response.text();
      loadScenario(MilitaryScenario.createFromString(msdlAsText));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    progress.done();
  };

  loadExampleScenario();
}

const { isOverDropZone } = useFileDropZone(dropZoneRef, onDrop);

async function onDrop(files: File[] | null) {
  if (!files || files.length === 0) {
    console.error("No files dropped");
    return;
  }
  const file = files[0];
  try {
    const content = await file.text();
    loadScenario(MilitaryScenario.createFromString(content));
  } catch (e) {
    console.error("Failed to load", file.name, e);
  }
}
</script>
<template>
  <div class="h-full w-full flex flex-col relative" ref="dropZoneRef">
    <header class="shrink-0">
      <MainNavbar />
    </header>
    <main class="flex-auto relative">
      <MaplibreMap @ready="onMapReady" />
      <MapLogic v-if="mlMap && msdl" :mlMap="mlMap" />
      <div class="absolute inset-0 pointer-events-none p-2">
        <LeftPanel />
        <RightPanel :mlMap />
      </div>
    </main>

    <CreateNewScenarioDialog
      v-model:open="dialogStore.isCreateMSDLDialogOpen"
      @created="createScenario"
    />
    <LoadFromUrlDialog v-model:open="dialogStore.isUrlDialogOpen" @loaded="loadScenario" />
    <EditAssociationsDialog v-model:open="dialogStore.isAssociationDialogOpen" />
    <DropZoneIndicator v-if="isOverDropZone" />
    <GlobalEvents
      :filter="inputEventFilter"
      @keydown.ctrl.k.prevent="showSearch = true"
      @keydown.meta.k.prevent="showSearch = true"
      @keyup.prevent.alt.k="showSearch = true"
    />
    <GlobalEvents
      :filter="inputEventFilter"
      @keydown.meta.z.exact="undo()"
      @keyup.ctrl.z.exact="undo()"
      @keydown.meta.shift.z="redo()"
      @keyup.ctrl.shift.z="redo()"
      @keyup.ctrl.y="redo()"
    />
    <CommandPalette v-model:open="showSearch" />
  </div>
</template>
