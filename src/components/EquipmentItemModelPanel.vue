<script setup lang="ts">
import type { EquipmentItem } from "@orbat-mapper/msdllib";
import EntityTypePanel from "@/components/EntityTypePanel.vue";
import { useScenarioStore } from "@/stores/scenarioStore";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-vue-next";
import type { EquipmentModel } from "@orbat-mapper/msdllib/dist/lib/modelType";

const {
  msdl,
  modifyScenario: { updateItemModel },
} = useScenarioStore();

const props = defineProps<{
  equipment: EquipmentItem;
}>();

function equipmentModel(): EquipmentModel | null {
  // don't use a computed getter because of reactivity issues
  const equipment = msdl.value?.getEquipmentById(props.equipment?.objectHandle) ?? null;
  return equipment?.model ?? null;
}

const createEquipmentModel = () => {
  updateItemModel(props.equipment?.objectHandle, { entityType: "0.0.0.0.0.0.0" });
};

const updateEquipmentModel = (entityType?: string) => {
  updateItemModel(props.equipment?.objectHandle, { entityType });
};
</script>
<template>
  <div v-if="equipmentModel()">
    <EntityTypePanel
      v-if="equipmentModel()!.entityType"
      v-model="equipmentModel()!.entityType"
      @update:modelValue="updateEquipmentModel"
    >
    </EntityTypePanel>
    <div class="flex flex-col items-center justify-center" v-else>
      <h4 class="text-sm font-bold my-2">No entity type provided</h4>
      <p>
        <Button variant="outline" @click="createEquipmentModel">Create model <PencilIcon /></Button>
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center" v-else>
    <h4 class="text-sm font-bold my-2">No equipment model provided</h4>
    <p>
      <Button variant="outline" @click="createEquipmentModel">Create model <PencilIcon /></Button>
    </p>
  </div>
</template>
