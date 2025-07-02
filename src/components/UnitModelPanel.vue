<script setup lang="ts">
import type { Unit } from "@orbat-mapper/msdllib";
import { computed } from "vue";
import EntityTypePanel from "@/components/EntityTypePanel.vue";

const props = defineProps<{
  unit: Unit;
}>();

const unitModel = computed(() => props.unit?.model ?? null);
</script>
<template>
  <div v-if="unitModel">
    <h4 class="text-sm font-bold mt-2">Unit Model</h4>
    <EntityTypePanel v-if="unitModel?.entityType" :entity-type="unitModel.entityType">
    </EntityTypePanel>
  </div>
  <div v-else>
    <h4 class="text-sm font-bold mt-2">No unit model provided</h4>
  </div>
</template>
