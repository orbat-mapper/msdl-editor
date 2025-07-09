<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, TableOfContentsIcon as SelectIcon } from "lucide-vue-next";
import { Switch } from "@/components/ui/switch";
import { useLayerStore } from "@/stores/layerStore.ts";
import ForceSideMenu from "@/components/ForceSideMenu.vue";
import CreateNewForceSideDialog from "@/components/CreateNewForceSideDialog.vue";
import { Badge } from "@/components/ui/badge";
import OrbatTree from "@/components/OrbatTree.vue";
import { computed } from "vue";
import { sortBy } from "@/utils.ts";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import SidePanelDropdown from "@/components/SidePanelDropdown.vue";
import { useSideStore } from "@/stores/uiStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import { useDialogStore } from "@/stores/dialogStore";

const {
  msdl,
  modifyScenario: { addForceSide },
} = useScenarioStore();
const selectStore = useSelectStore();

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

function toggleLayers() {
  if (layerStore.layers.size >= sides.value.length) {
    layerStore.layers.clear();
    return;
  }
  sides.value.forEach((side) => {
    layerStore.layers.add(side.objectHandle);
  });
}

const toggleSide = (id: string) => {
  if (layerStore.layers.has(id)) {
    layerStore.layers.delete(id);
  } else {
    layerStore.layers.add(id);
  }
};

function createForceSide() {
  dialogStore.toggleCreateForceSideDialog();
}
</script>

<template>
  <header class="flex items-center justify-between px-4 mt-1">
    <h3 class="text-xs/6 font-semibold uppercase">Sides</h3>
    <SidePanelDropdown @toggleVisibility="toggleLayers" @createForceSide="createForceSide" />
  </header>
  <CreateNewForceSideDialog
    v-model:open="dialogStore.isCreateForceSideDialogOpen"
    @created="addForceSide"
  />
  <Accordion type="multiple" class="mt-2">
    <AccordionItem v-for="side in sides" :key="side.objectHandle" :value="side.objectHandle">
      <AccordionTrigger class="bg-card-foreground/5 py-1 rounded-none px-4 group">
        <div class="flex items-center gap-2 h-9">
          <span class="font-medium">{{ side.name }}</span
          ><Badge v-if="side === msdl?.primarySide">Primary</Badge>
        </div>
        <template #icon>
          <div class="flex items-center gap-2">
            <Button
              class="opacity-0 group-hover:opacity-100"
              type="button"
              variant="ghost"
              title="Show details"
              size="icon"
              @click.stop="selectStore.activeItem = side"
              ><SelectIcon
            /></Button>
            <Switch
              @click.stop
              :modelValue="layerStore.layers.has(side.objectHandle)"
              @update:modelValue="toggleSide(side.objectHandle)"
              title="Toggle visibility"
            />
            <ForceSideMenu :side="side" />
            <ChevronDown
              class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-90"
            />
          </div>
        </template>
      </AccordionTrigger>
      <AccordionContent>
        <template v-if="side.forces.length > 0">
          <div v-for="force in side.forces" :key="force.objectHandle" class="my-2">
            <div class="flex items-center justify-between pr-4">
              <h4 class="text-sm ml-4">{{ force.name }}</h4>
              <div class="gap-1 flex items-center">
                <Badge v-if="force.militaryService" variant="secondary">{{
                  force.militaryService
                }}</Badge>
                <Badge v-if="force.countryCode" variant="secondary">{{ force.countryCode }}</Badge>
              </div>
            </div>
            <OrbatTree :side="force" :key="msdl?.primarySide?.objectHandle" />
          </div>
        </template>
        <OrbatTree v-else :side="side" :key="msdl?.primarySide?.objectHandle" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  <div v-if="msdl">
    <div class="m-4">
      <Button variant="secondary" @click="toggleLayers()">Toggle all side visibilities</Button>
    </div>
  </div>
</template>
