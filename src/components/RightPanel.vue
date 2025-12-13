<script setup lang="ts">
import DetailsPanel from "@/components/DetailsPanel.vue";
import DeploymentPanel from "@/components/DeploymentPanel.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import { flyToItem } from "@/composables/scenarioActions.ts";
import { type EquipmentItem, ForceSide, type Unit } from "@orbat-mapper/msdllib";

const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const selectStore = useSelectStore();

function flyTo(item: EquipmentItem | Unit | ForceSide) {
  if (mlMap) {
    flyToItem(item, mlMap);
  }
}
</script>
<template>
  <DetailsPanel
    v-if="selectStore.activeItem && mlMap"
    :item="selectStore.activeItem"
    class="pointer-events-auto absolute right-2 top-[150px]"
    @flyTo="flyTo"
    :mlMap
  />
  <DeploymentPanel
    v-if="selectStore.activeFederate"
    :federate="selectStore.activeFederate"
    class="pointer-events-auto absolute right-2 top-[150px]"
  />
</template>
