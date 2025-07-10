<script setup lang="ts">
import type { Unit } from "@orbat-mapper/msdllib";
import EntityTypePanel from "@/components/EntityTypePanel.vue";
import { useScenarioStore } from "@/stores/scenarioStore";
import { Button } from "@/components/ui/button";
import type { UnitModel } from "@orbat-mapper/msdllib/dist/lib/modelType";

const {
  msdl,
  modifyScenario: { updateItemModel },
} = useScenarioStore();

const props = defineProps<{
  unit: Unit;
}>();

function unitModel(): UnitModel | null {
  const unit = msdl.value?.getUnitById(props.unit?.objectHandle) ?? null;
  return unit?.model ?? null;
}

const createUnitModel = () => {
  updateItemModel(props.unit.objectHandle, { entityType: "0.0.0.0.0.0.0" });
};

const updateUnitModel = (entityType?: string) => {
  updateItemModel(props.unit.objectHandle, { entityType });
};
</script>
<template>
  <div v-if="unitModel()">
    <EntityTypePanel
      v-if="unitModel()!.entityType"
      v-model="unitModel()!.entityType"
      @update:modelValue="updateUnitModel"
    >
    </EntityTypePanel>
  </div>
  <div class="flex items-center justify-center" v-else>
    <h4 class="text-sm font-bold mt-2">No unit model provided</h4>
    <p><Button variant="outline" @click="createUnitModel">Create model</Button></p>
  </div>
</template>
