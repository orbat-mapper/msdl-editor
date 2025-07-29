<script setup lang="ts">
import { type EquipmentItem, type Unit } from "@orbat-mapper/msdllib";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import MilSymbol from "@/components/MilSymbol.vue";
import { FocusIcon } from "lucide-vue-next";
import { useSelectStore } from "@/stores/selectStore.ts";

const props = defineProps<{
  item: Unit;
}>();

const emit = defineEmits<{
  (e: "flyTo", eq: EquipmentItem): void;
}>();

const selectStore = useSelectStore();

function onSelectEquipment(eq: EquipmentItem) {
  selectStore.activeItem = eq;
}
</script>

<template>
  <div>
    <Table class="-mt-4 w-full">
      <TableBody>
        <TableRow v-for="eq in item.equipment" :key="eq.objectHandle">
          <TableCell class="w-5 p-0">
            <MilSymbol :sidc="eq.sidc" :size="16" />
          </TableCell>
          <TableCell>
            <Button variant="link" size="sm" @click="onSelectEquipment(eq)">{{ eq.label }}</Button>
          </TableCell>
          <TableCell class="w-9">
            <Button variant="ghost" size="icon" @click="emit('flyTo', eq)">
              <FocusIcon />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <ul class="list-disc pl-4"></ul>
  </div>
</template>
