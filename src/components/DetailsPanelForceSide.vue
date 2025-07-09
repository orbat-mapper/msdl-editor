<script setup lang="ts">
import { type ForceSide, MilitaryServiceItems } from "@orbat-mapper/msdllib";
import DescriptionList from "@/components/DescriptionList.vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import { useToggle } from "@vueuse/core";
import { PencilIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import ForceSideEditForm from "@/components/ForceSideEditForm.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";

const {
  modifyScenario: { updateForceSide },
} = useScenarioStore();

const props = defineProps<{
  item: ForceSide;
}>();

const [showEditForm, toggleEditForm] = useToggle(false);

function onUpdate(data: Partial<ForceSide>) {
  toggleEditForm();
  updateForceSide(props.item.objectHandle, data);
  console.log("Updated ForceSide:", data);
}

function getServiceLabel(service: string): string {
  return MilitaryServiceItems.find((item) => item.value === service)?.label ?? service;
}
</script>

<template>
  <div class="flex items-center justify-between mt-1">
    <h4 class="text-sm font-bold">Force/Side</h4>
    <div class="flex items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        @click="toggleEditForm()"
        :disabled="showEditForm"
        ><PencilIcon
      /></Button>
    </div>
  </div>
  <ForceSideEditForm v-if="showEditForm" :item @cancel="toggleEditForm()" @update="onUpdate" />
  <DescriptionList v-else class="divide-y divide-border">
    <DescriptionItem label="Name">{{ item.name }}</DescriptionItem>
    <DescriptionItem v-if="item.militaryService" label="Military service">{{
      getServiceLabel(item.militaryService)
    }}</DescriptionItem>
    <DescriptionItem v-if="item.countryCode" label="Country code">
      {{ item.countryCode }}
    </DescriptionItem>
  </DescriptionList>
</template>
