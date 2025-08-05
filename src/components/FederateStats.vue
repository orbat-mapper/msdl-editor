<template>
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-2">
      <div v-for="stat in stats" :key="stat.name" class="px-4 py-2">
        <p class="text-sm/6 font-medium text-muted-foreground">{{ stat.name }}</p>
        <p class="flex items-baseline gap-x-2">
          <span class="text-2xl font-semibold tracking-tight">{{ stat.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { UNALLOCATED_FEDERATE } from "@/stores/selectStore";
import type { Federate } from "@orbat-mapper/msdllib";
import { computed } from "vue";

const props = defineProps<{
  federateHandle: string;
}>();

const { msdl } = useScenarioStore();

function getReactiveFederate() {
  return msdl.value?.getFederateById(props.federateHandle) ?? (UNALLOCATED_FEDERATE as Federate);
}

function getReactiveDeployment() {
  return msdl.value?.deployment;
}

function federateUnits() {
  return getReactiveFederate() === UNALLOCATED_FEDERATE
    ? getReactiveDeployment()?.getUnallocatedUnits() || []
    : getReactiveFederate().units || [];
}

function federateEquipment() {
  return getReactiveFederate() === UNALLOCATED_FEDERATE
    ? getReactiveDeployment()?.getUnallocatedEquipment() || []
    : getReactiveFederate().equipment || [];
}

const stats = computed(() => [
  { name: "Units", value: federateUnits().length },
  { name: "Equipment", value: federateEquipment().length },
]);
</script>
