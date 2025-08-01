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

const reactiveFederate = computed(() => {
  return msdl.value?.getFederateById(props.federateHandle) ?? (UNALLOCATED_FEDERATE as Federate);
});

const federateUnits = computed(() => {
  return reactiveFederate.value === UNALLOCATED_FEDERATE
    ? msdl.value?.deployment?.getUnallocatedUnits() || []
    : reactiveFederate.value?.units || [];
});

const federateEquipment = computed(() => {
  return reactiveFederate.value === UNALLOCATED_FEDERATE
    ? msdl.value?.deployment?.getUnallocatedEquipment() || []
    : reactiveFederate.value?.equipment || [];
});

const stats = computed(() => [
  { name: "Units", value: federateUnits.value.length || 0 },
  { name: "Equipment", value: federateEquipment.value.length || 0 },
]);
</script>
