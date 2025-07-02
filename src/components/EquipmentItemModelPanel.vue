<script setup lang="ts">
import type { EquipmentItem } from "@orbat-mapper/msdllib";
import { computed, ref } from "vue";
import EntityTypePanel from "@/components/EntityTypePanel.vue";

const props = defineProps<{
  equipment: EquipmentItem;
}>();

// Re-render component when the equipmentModel is updated
const componentKey = ref(0);
const triggerRerender = () => { 
  componentKey.value += 1;
  emit('rerenderXML');
}
const emit = defineEmits(['rerenderXML']);

const equipmentModel = computed(() => props.equipment?.model ?? null);
</script>
<template>
  <div v-if="equipmentModel">
    <h4 class="text-sm font-bold mt-2">EquipmentItem Model</h4>
    <EntityTypePanel
      v-if="equipmentModel?.entityType"
      v-model="equipmentModel.entityType"
      @update:modelValue="triggerRerender"
      :key="componentKey" 
    >
    </EntityTypePanel>
    <span v-else>No entitytype provided</span>
  </div>
  <div v-else>
    <h4 class="text-sm font-bold mt-2">No equipment model provided</h4>
  </div>
</template>
