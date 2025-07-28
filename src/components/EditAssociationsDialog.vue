<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { computed, ref } from "vue";
import { useSideStore } from "@/stores/uiStore.ts";
import SwitchLabel from "@/components/SwitchLabel.vue";
import { enum2Object, sortBy } from "@/utils.ts";
import { HostilityStatusCodeItems } from "@orbat-mapper/msdllib";

const open = defineModel<boolean>("open", { required: true });

const { msdl } = useScenarioStore();
const sideStore = useSideStore();
const currentRow = ref(-1);
const currentColumn = ref(-1);

const associationMap = computed((): Record<string, Record<string, string>> => {
  if (!msdl.value) return {};
  return Object.fromEntries(
    msdl.value.forceSides.map((forceSide) => [
      forceSide.objectHandle,
      Object.fromEntries(forceSide.associations.map((a) => [a.affiliateHandle, a.relationship])),
    ]),
  );
});

const sides = computed(() => {
  if (sideStore.hideEmptySides) {
    return sortBy(msdl.value?.sides.filter((side) => side.rootUnits.length > 0) ?? [], "name");
  }
  return sortBy(msdl.value?.sides ?? [], "name");
});

const enumLookup = enum2Object(HostilityStatusCodeItems);

function setCurrentRowAndColumn(event: PointerEvent) {
  const target = event.target as HTMLElement;
  const row = target.dataset.row;
  const column = target.dataset.column;
  if (row && column) {
    currentRow.value = +row;
    currentColumn.value = +column;
  } else {
    currentRow.value = -1;
    currentColumn.value = -1;
  }
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="w-auto sm:max-w-[calc(100%-8rem)] max-h-[90dvh] flex-col flex">
      <DialogHeader class="flex-0">
        <DialogTitle>Associations</DialogTitle>
        <DialogDescription> Associations between forces and sides</DialogDescription>
      </DialogHeader>
      <Table v-if="msdl" class="">
        <TableHeader>
          <TableRow>
            <TableHead class="sticky left-0 z-10 top-0 bg-background backdrop-blur-sm"
              >Force/Side</TableHead
            >
            <TableCell
              v-for="(forceSide, columnIndex) in sides"
              :key="forceSide.objectHandle"
              class="font-medium sticky top-0 bg-background backdrop-blur-sm"
              :data-column="columnIndex + 1"
              :class="currentColumn === columnIndex ? 'bg-accent/60' : ''"
              >{{ forceSide.name }}</TableCell
            >
          </TableRow>
        </TableHeader>
        <TableBody @pointerover="setCurrentRowAndColumn" @pointerleave="setCurrentRowAndColumn">
          <TableRow
            v-for="(forceSide, rowIndex) in sides"
            :key="forceSide.objectHandle"
            :data-row="rowIndex"
          >
            <TableCell
              class="font-medium sticky left-0 bg-background/70 backdrop-blur-sm"
              :class="currentRow === rowIndex ? 'bg-accent/60' : ''"
              >{{ forceSide.name }}</TableCell
            >
            <TableCell
              v-for="(affiliate, columnIndex) in sides"
              :key="affiliate.objectHandle"
              :data-column="columnIndex"
              :data-row="rowIndex"
              :class="
                currentRow === rowIndex || currentColumn === columnIndex ? 'bg-accent/60' : ''
              "
              >{{
                enumLookup[associationMap[forceSide.objectHandle][affiliate.objectHandle]]?.label ??
                ""
              }}</TableCell
            >
          </TableRow>
        </TableBody>
      </Table>

      <DialogFooter>
        <SwitchLabel v-model="sideStore.hideEmptySides">Hide empty sides</SwitchLabel></DialogFooter
      >
    </DialogContent>
  </Dialog>
</template>
<style></style>
