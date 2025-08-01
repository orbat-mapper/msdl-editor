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
import { computed, ref, watch } from "vue";
import { PencilIcon } from "lucide-vue-next";
import { useSideStore } from "@/stores/uiStore.ts";
import SwitchLabel from "@/components/SwitchLabel.vue";
import { enum2Object, sortBy } from "@/utils.ts";
import { type HostilityStatusCode, HostilityStatusCodeItems } from "@orbat-mapper/msdllib";
import { Button } from "@/components/ui/button";
import AssociationsEditRow from "@/components/AssociationsEditRow.vue";

const open = defineModel<boolean>("open", { required: true });

const { msdl } = useScenarioStore();
const sideStore = useSideStore();
const currentRow = ref(-1);
const currentColumn = ref(-1);
const editRowIndex = ref(-1);

const associationMap = computed((): Record<string, Record<string, HostilityStatusCode>> => {
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
    return sortBy(
      msdl.value?.sides.filter((side) => side.rootUnits.length > 0 || side.equipment.length > 0) ??
        [],
      "name",
    );
  }
  return sortBy(msdl.value?.sides ?? [], "name");
});

watch(open, (newValue) => {
  if (!newValue) {
    // Reset the current row and column when the dialog closes
    currentRow.value = -1;
    currentColumn.value = -1;
    editRowIndex.value = -1;
  }
});

const enumLookup = enum2Object(HostilityStatusCodeItems);

function setCurrentRowAndColumn(event: PointerEvent) {
  const target = event.target as HTMLElement;
  const row = target.dataset.row;
  const column = target.dataset.column;
  if (editRowIndex.value < 0 && row && column) {
    currentRow.value = +row;
    currentColumn.value = +column;
  } else {
    currentRow.value = -1;
    currentColumn.value = -1;
  }
}

function editRow(rowIndex: number) {
  if (editRowIndex.value === rowIndex) {
    // If already editing, stop editing
    editRowIndex.value = -1;
    return;
  }
  editRowIndex.value = rowIndex;
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
            <TableHead class="sticky left-0 z-10 top-0 bg-background backdrop-blur-sm"></TableHead>
            <TableHead class="sticky left-10 z-10 top-0 bg-background backdrop-blur-sm"
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
            <template v-if="editRowIndex === rowIndex">
              <AssociationsEditRow
                :forceSide
                :rowIndex
                :associationMap
                :sides
                @cancel="editRow(-1)"
                @close="editRow(-1)"
              />
            </template>
            <template v-else>
              <TableCell
                class="font-medium sticky left-0 bg-background/70 backdrop-blur-sm"
                :class="currentRow === rowIndex ? 'bg-accent/60' : ''"
                ><Button
                  variant="ghost"
                  size="icon"
                  class="text-muted-foreground"
                  @click="editRow(rowIndex)"
                  ><PencilIcon
                /></Button>
              </TableCell>
              <TableCell
                class="font-medium sticky left-10 bg-background/70 backdrop-blur-sm"
                :class="currentRow === rowIndex ? 'bg-accent/60' : ''"
                >{{ forceSide.name }}</TableCell
              >
              <TableCell
                v-for="(affiliate, columnIndex) in sides"
                :key="affiliate.objectHandle"
                :data-column="columnIndex"
                :data-row="rowIndex"
                :class="[
                  currentRow === rowIndex || currentColumn === columnIndex ? 'bg-accent/60' : '',
                  editRowIndex >= 0 ? 'text-muted-foreground/50' : '',
                ]"
                >{{
                  enumLookup[associationMap[forceSide.objectHandle][affiliate.objectHandle]]
                    ?.label ?? ""
                }}</TableCell
              ></template
            >
          </TableRow>
        </TableBody>
      </Table>

      <DialogFooter>
        <SwitchLabel v-model="sideStore.hideEmptySides">Hide empty sides</SwitchLabel>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<style></style>
