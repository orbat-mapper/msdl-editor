<script setup lang="ts">
import type { Unit } from "@orbat-mapper/msdllib";
import { computed } from "vue";
import EntityTypePanel from "@/components/EntityTypePanel.vue";

const props = defineProps<{
  unit: Unit;
}>();

const emit = defineEmits<{
  (e: "update:unit", value: Unit): void;
}>();

const unitModel = computed(() => props.unit?.model ?? null);
</script>
<template>
  <div v-if="unitModel">
    <h4 class="text-sm font-bold mt-2">Unit Model</h4>
    <EntityTypePanel
      v-if="unitModel?.entityType"
      v-model="unitModel.entityType"
      @update:model-value="emit('update:unit', unit)"
    >
    </EntityTypePanel>
  </div>
  <div v-else>
    <h4 class="text-sm font-bold mt-2">No unit model provided</h4>
  </div>
</template>
