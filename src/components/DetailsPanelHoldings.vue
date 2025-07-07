<script setup lang="ts">
import { Holding, type EquipmentItem, type HoldingType, type Unit } from "@orbat-mapper/msdllib";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToggle } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-vue-next";
import HoldingsEditDialog from "@/components/HoldingsEditDialog.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";

const {
  msdl,
  modifyScenario: { updateHoldings },
} = useScenarioStore();

const [showEditDialog, toggleEditDialog] = useToggle(false);

const props = defineProps<{
  item: Unit | EquipmentItem;
}>();

function holdings(): Holding[] {
  const item = msdl.value?.getUnitOrEquipmentById(props.item?.objectHandle) ?? null;
  return item?.holdings ?? [];
}

function onUpdate(data: HoldingType[]) {
  toggleEditDialog();
  updateHoldings(props.item.objectHandle, data);
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between -mt-4">
      <h4 class="text-sm font-bold ml-2">Holdings</h4>
      <Button
        class="mr-2"
        type="button"
        variant="ghost"
        @click="toggleEditDialog()"
        :disabled="showEditDialog"
      >
        Edit <PencilIcon />
      </Button>
    </div>
    <HoldingsEditDialog
      v-if="showEditDialog"
      :holdings="holdings()"
      :open="showEditDialog"
      :parent-name="item.name"
      @cancel="toggleEditDialog"
      @update="onUpdate"
      @update:open="toggleEditDialog"
    />
    <Table v-if="holdings().length > 0">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>NSN code</TableHead>
          <TableHead>On hand</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(holding, i) in holdings()" :key="i">
          <TableCell class="w-1/3">{{ holding.nsnName }}</TableCell>
          <TableCell class="w-1/3">{{ holding.nsnCode }}</TableCell>
          <TableCell class="w-1/3">{{ holding.onHandQuantity }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div class="flex items-center justify-center" v-else>
      <h4 class="text-sm font-bold mt-2">No holdings present</h4>
    </div>
  </div>
</template>
