<script setup lang="ts">
import { ChevronsRight } from "lucide-vue-next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsmod";
import SidePanel from "@/components/SidePanel.vue";
import { useUIStore, useWidthStore } from "@/stores/uiStore.ts";
import CloseButton from "@/components/CloseButton.vue";
import { Button } from "@/components/ui/button";
import PanelMapDisplay from "@/components/PanelMapDisplay.vue";
import PanelScenarioInfo from "@/components/PanelScenarioInfo.vue";
import PanelScenarioOptions from "@/components/PanelScenarioOptions.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import PanelScenarioDeployment from "@/components/PanelScenarioDeployment.vue";
import PanelResizeHandle from "@/components/PanelResizeHandle.vue";

const uiStore = useUIStore();
const widthStore = useWidthStore();
const { msdl } = useScenarioStore();
</script>
<template>
  <aside
    v-if="uiStore.showLeftPanel"
    class="h-full max-h-[90vh] bg-sidebar/95 backdrop-blur-sm pointer-events-auto border rounded-md relative overflow-auto"
    :style="{ width: widthStore.orbatPanelWidth + 'px' }"
  >
    <Tabs default-value="orbat" class="flex flex-col h-full">
      <header class="flex-0 flex items-center justify-between w-full gap-2 p-2">
        <TabsList class="w-full">
          <TabsTrigger value="orbat">ORBAT</TabsTrigger>
          <TabsTrigger value="mapdisplay">Display</TabsTrigger>
          <TabsTrigger value="scenarioInfo">Info</TabsTrigger>
          <TabsTrigger value="scenarioOptions">Options</TabsTrigger>
          <TabsTrigger v-if="msdl?.isNETN" value="deployment">Deployment</TabsTrigger>
        </TabsList>
        <CloseButton @click="uiStore.toggleLeftPanel()" />
      </header>
      <ScrollArea class="flex-auto pb-8 overflow-auto">
        <TabsContent value="orbat">
          <SidePanel />
        </TabsContent>
        <TabsContent value="mapdisplay">
          <PanelMapDisplay class="mt-6 px-4" />
        </TabsContent>
        <TabsContent value="scenarioInfo">
          <PanelScenarioInfo class="px-4" />
        </TabsContent>
        <TabsContent value="scenarioOptions">
          <PanelScenarioOptions class="px-4" />
        </TabsContent>
        <TabsContent v-if="msdl?.isNETN" value="deployment">
          <PanelScenarioDeployment />
        </TabsContent>
      </ScrollArea>
    </Tabs>
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
