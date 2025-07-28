<script setup lang="ts">
import { TableCell } from "@/components/ui/table";
import {
  type ForceSide,
  type HostilityStatusCode,
  HostilityStatusCodeItems,
} from "@orbat-mapper/msdllib";
import { Button } from "@/components/ui/button";
import EnumSelect from "@/components/EnumSelect.vue";
import { computed, ref, watch } from "vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";

const { forceSide, sides, rowIndex, associationMap } = defineProps<{
  forceSide: ForceSide;
  sides: ForceSide[];
  rowIndex: number;
  associationMap: Record<string, Record<string, HostilityStatusCode>>;
}>();

const emit = defineEmits(["cancel", "close"]);

const form = ref({ ...associationMap[forceSide.objectHandle] });

const {
  modifyScenario: { updateForceSideAssociation },
} = useScenarioStore();

function onCancel() {
  emit("cancel");
}

function onSave() {
  const updatedAssociations = Object.entries(form.value).map(([affiliateHandle, relationship]) => ({
    affiliateHandle,
    relationship,
  }));
  updateForceSideAssociation(forceSide.objectHandle, updatedAssociations);
  emit("close");
}
</script>
<template>
  <TableCell class="sticky left-0 z-1 bg-background/70 backdrop-blur-sm"> </TableCell>
  <TableCell class="font-medium sticky left-10 z-1 bg-background/70 backdrop-blur-sm"
    ><span class="font-bold">{{ forceSide.name }}</span>
    <div class="mt-4 -ml-4 pr-4 flex items-center gap-2">
      <Button @click="onCancel" class="" variant="secondary" size="sm">Cancel</Button>
      <Button size="sm" @click="onSave()">Save</Button>
    </div>
  </TableCell>
  <TableCell
    v-for="(affiliate, columnIndex) in sides"
    :key="affiliate.objectHandle"
    :data-column="columnIndex"
    :data-row="rowIndex"
    class="bg-accent/60"
  >
    <EnumSelect
      v-if="forceSide.objectHandle !== affiliate.objectHandle"
      :values="HostilityStatusCodeItems"
      v-model="form[affiliate.objectHandle]"
      class="w-full"
    />
  </TableCell>
</template>
