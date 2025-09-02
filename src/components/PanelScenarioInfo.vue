<script setup lang="ts">
import { FocusIcon, PencilIcon } from "lucide-vue-next";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/dialogStore.ts";
import { Badge } from "@/components/ui/badge";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import { computed } from "vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import DescriptionList from "@/components/DescriptionList.vue";
import ScenarioIdEditForm from "@/components/ScenarioIdEditForm.vue";
import { useToggle } from "@vueuse/core";
import type { ScenarioIdType } from "@orbat-mapper/msdllib/dist/lib/scenarioid";
import ScenarioStats from "@/components/ScenarioStats.vue";

const emit = defineEmits(["flyTo"]);

const {
  msdl,
  modifyScenario: { updateScenarioId },
} = useScenarioStore();
const dialogStore = useDialogStore();

const [showEditForm, toggleEditForm] = useToggle(false);

const myElement = computed(() => {
  return { element: msdl.value?.scenarioId.element };
});

const areaOfInterest = computed(() => {
  return msdl.value?.environment?.areaOfInterest;
});

function onUpdate(data: Partial<ScenarioIdType>) {
  toggleEditForm();
  updateScenarioId(data);
}
</script>
<template>
  <div v-if="msdl">
    <div class="flex items-center justify-between mt-1">
      <h4 class="text-base font-semibold">Scenario information</h4>
      <div class="flex items-center gap-1">
        <Badge v-if="msdl.isNETN" variant="secondary">NETN</Badge
        ><Button
          type="button"
          variant="ghost"
          size="icon"
          @click="toggleEditForm()"
          :disabled="showEditForm"
          ><PencilIcon
        /></Button>
      </div>
    </div>
    <ScenarioIdEditForm
      v-if="showEditForm"
      :item="msdl.scenarioId"
      @cancel="toggleEditForm"
      @update="onUpdate"
    />
    <DescriptionList v-else class="divide-y divide-border">
      <DescriptionItem label="Name">{{ msdl.scenarioId.name || "n/a" }}</DescriptionItem>
      <DescriptionItem label="Description">{{ msdl.scenarioId.description }}</DescriptionItem>
      <DescriptionItem label="Security classification">
        {{ msdl.scenarioId.securityClassification }}
      </DescriptionItem>
      <DescriptionItem label="Modification date">
        {{ msdl.scenarioId.modificationDate || "n/a" }}
      </DescriptionItem>
      <DescriptionItem label="Type">{{ msdl.scenarioId.type || "n/a" }}</DescriptionItem>
      <DescriptionItem label="Version">{{ msdl.scenarioId.version || "n/a" }}</DescriptionItem>
      <div class="flex items-center justify-end mt-4">
        <Button variant="outline" type="button" size="sm" @click="toggleEditForm()"
          >Modify ScenarioID</Button
        >
      </div>
    </DescriptionList>
    <h4 class="text-base font font-semibold">Environment</h4>
    <DescriptionList class="divide-y divide-border">
      <DescriptionItem label="Scenario time">{{
        msdl.environment?.scenarioTime || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="Area of interest">
        <div class="flex items-center justify-between">
          <span>{{ areaOfInterest?.toBoundingBox() || "n/a" }}</span>
          <Button
            @click="emit('flyTo', areaOfInterest?.toBoundingBox())"
            variant="ghost"
            size="icon"
            title="Zoom to area"
            :disabled="!areaOfInterest"
            ><FocusIcon
          /></Button>
        </div>
      </DescriptionItem>
    </DescriptionList>
    <h4 class="text-base font font-semibold mt-4">Scenario statistics</h4>
    <ScenarioStats />
    <div class="mt-4">
      <h4 class="text-sm font-bold">Debugging</h4>
      <div class="flex gap-2 mt-2">
        <ShowXMLDialog :item="myElement" class="">ScenarioID</ShowXMLDialog>
        <ShowXMLDialog :item="msdl" class="">MSDL (slow)</ShowXMLDialog>
      </div>
    </div>
  </div>
</template>
