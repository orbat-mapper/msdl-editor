<template>
  <div class="">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-3">
        <div v-for="stat in stats" :key="stat.name" class="px-4 py-6">
          <p class="text-sm/6 font-medium text-muted-foreground">{{ stat.name }}</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight">{{ stat.value }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { computed } from "vue";

const { msdl } = useScenarioStore();

const stats = computed(() => [
  { name: "Sides/force", value: Object.keys(msdl.value?.forceSides ?? {}).length },
  { name: "Units", value: Object.keys(msdl.value?.unitMap ?? {}).length },
  { name: "Equipment", value: Object.keys(msdl.value?.equipmentMap ?? {}).length },
]);
</script>
