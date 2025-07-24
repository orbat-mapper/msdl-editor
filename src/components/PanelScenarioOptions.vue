<script setup lang="ts">
import { PencilIcon } from "lucide-vue-next";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/dialogStore.ts";
import { Badge } from "@/components/ui/badge";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import { computed } from "vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import DescriptionList from "@/components/DescriptionList.vue";
import OptionsEditForm from "@/components/OptionsEditForm.vue";
import { useToggle } from "@vueuse/core";
import type { MsdlOptionsType } from "@orbat-mapper/msdllib/dist/lib/msdlOptions";

const {
  msdl,
  modifyScenario: { updateOptions },
} = useScenarioStore();
const dialogStore = useDialogStore();

const [showEditForm, toggleEditForm] = useToggle(false);

const myElement = computed(() => {
  return { element: msdl.value?.msdlOptions.element };
});

function onUpdate(data: Partial<MsdlOptionsType>) {
  toggleEditForm();
  updateOptions(data);
}
</script>
<template>
  <div v-if="msdl">
    <div class="flex items-center justify-between mt-1">
      <h4 class="text-sm font-bold">Options</h4>
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
    <OptionsEditForm
      v-if="showEditForm"
      :item="msdl.msdlOptions"
      @cancel="toggleEditForm"
      @update="onUpdate"
    />
    <DescriptionList v-else class="divide-y divide-border">
      <DescriptionItem label="MSDLVersion">{{
        msdl.msdlOptions.msdlVersion || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="AggregateBased">{{
        msdl.msdlOptions.aggregateBased || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="AggregateEchelon">{{
        msdl.msdlOptions.aggregateEchelon || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="StandardName">{{
        msdl.msdlOptions.standardName || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="MajorVersion">{{
        msdl.msdlOptions.majorVersion || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="MinorVersion">{{
        msdl.msdlOptions.minorVersion || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="CoordinateSystemType">{{
        msdl.msdlOptions.coordinateSystemType || "n/a"
      }}</DescriptionItem>
      <DescriptionItem label="CoordinateSystemDatum">{{
        msdl.msdlOptions.coordinateSystemDatum || "n/a"
      }}</DescriptionItem>
      <div class="flex items-center justify-end mt-4">
        <Button variant="outline" type="button" size="sm" @click="toggleEditForm()"
          >Modify Options</Button
        >
      </div>
    </DescriptionList>

    <div class="mt-4">
      <h4 class="text-sm font-bold">Debugging</h4>
      <div class="flex gap-2 mt-2">
        <ShowXMLDialog :item="myElement" class="">MSDL Options</ShowXMLDialog>
        <ShowXMLDialog :item="msdl" class="">MSDL (slow)</ShowXMLDialog>
      </div>
    </div>
  </div>
</template>
