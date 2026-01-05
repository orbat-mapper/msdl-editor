<script setup lang="ts">
import { ChevronsRight } from "lucide-vue-next";
import { ScrollArea } from "@/components/ui/scroll-area";

import SidePanel from "@/components/SidePanel.vue";
import { useUIStore, useWidthStore } from "@/stores/uiStore.ts";
import CloseButton from "@/components/CloseButton.vue";
import { Button } from "@/components/ui/button";
import PanelMapDisplay from "@/components/PanelMapDisplay.vue";
import PanelScenarioInfo from "@/components/PanelScenarioInfo.vue";
import PanelScenarioOptions from "@/components/PanelScenarioOptions.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import PanelResizeHandle from "@/components/PanelResizeHandle.vue";
import type { LngLatBoundsLike } from "maplibre-gl";
import type { BBox } from "geojson";
import ScrollTabs from "@/components/ScrollTabs.vue";
import { TabsContent } from "@/components/ui/tabsmod";

const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const uiStore = useUIStore();
const widthStore = useWidthStore();
const { msdl } = useScenarioStore();

function flyToBoundingBox(bbox: BBox) {
  if (bbox.some((v) => v === Infinity || v === -Infinity)) {
    return;
  }
  mlMap?.fitBounds(bbox as LngLatBoundsLike, {
    padding: { top: 50, bottom: 50, left: widthStore.orbatPanelWidth + 50, right: 100 },
  });
}

const tabItems = [
  { label: "ORBAT", value: "orbat" },
  { label: "Display", value: "mapdisplay" },
  { label: "Info", value: "scenarioInfo" },
  { label: "Options", value: "scenarioOptions" },
];
</script>
<template>
  <aside
    v-if="uiStore.showLeftPanel"
    class="h-full max-h-[90vh] bg-sidebar/95 backdrop-blur-sm pointer-events-auto border rounded-md relative overflow-auto"
    :style="{ width: widthStore.orbatPanelWidth + 'px' }"
  >
    <ScrollTabs default-value="orbat" :items="tabItems">
      <template #right>
        <CloseButton @click="uiStore.toggleLeftPanel()" class="mr-2" />
      </template>

      <TabsContent value="orbat">
        <SidePanel />
      </TabsContent>
      <TabsContent value="mapdisplay">
        <PanelMapDisplay class="mt-6 px-4" />
      </TabsContent>
      <TabsContent value="scenarioInfo">
        <PanelScenarioInfo class="px-4" @flyTo="flyToBoundingBox" />
      </TabsContent>
      <TabsContent value="scenarioOptions">
        <PanelScenarioOptions class="px-4" />
      </TabsContent>
    </ScrollTabs>
    <PanelResizeHandle
      :width="widthStore.orbatPanelWidth"
      @update="widthStore.orbatPanelWidth = $event"
      @reset="widthStore.resetOrbatPanelWidth()"
    />
  </aside>
  <Button
    v-else
    variant="outline"
    @click="uiStore.toggleLeftPanel()"
    size="icon"
    class="pointer-events-auto"
  >
    <ChevronsRight class="size-4" />
    <span class="sr-only">Open panel</span>
  </Button>
</template>
