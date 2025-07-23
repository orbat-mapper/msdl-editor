<script setup lang="ts">
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/dialogStore.ts";
import { EllipsisVertical as DotsVerticalIcon } from "lucide-vue-next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import type { EquipmentItem, Unit } from "@orbat-mapper/msdllib";
import DeploymentDropdown from "./DeploymentDropdown.vue";
import CreateNewFederateDialog from "./CreateNewFederateDialog.vue";
import AssignToFederateDropdown from "./AssignToFederateDropdown.vue";

const {
  msdl,
  modifyScenario: { addFederate, assignUnitToFederate, assignEquipmentToFederate },
} = useScenarioStore();
const selectStore = useSelectStore();
const dialogStore = useDialogStore();

function getFederateUnits(units: string[]): Unit[] {
  if (!msdl.value) return [];
  return units
    .map((unitId) => msdl.value?.getUnitById(unitId))
    .filter((unit) => unit !== undefined);
}

function getFederateEquipment(equipment: string[]): EquipmentItem[] {
  if (!msdl.value) return [];
  return equipment
    .map((eqId) => msdl.value?.getEquipmentById(eqId))
    .filter((eq) => eq !== undefined);
}

function createFederate() {
  dialogStore.toggleCreateFederateDialog();
}
</script>
<template>
  <div v-if="msdl?.deployment">
    <header class="flex items-center justify-between px-4 mt-1">
      <h3 class="text-xs/6 font-semibold uppercase">Federates</h3>
      <DeploymentDropdown @create-federate="createFederate"></DeploymentDropdown>
    </header>
    <CreateNewFederateDialog
      v-model:open="dialogStore.isCreateFederateDialogOpen"
      @created="addFederate"
    />
    <Accordion type="multiple" class="mt-2">
      <AccordionItem
        v-for="federate in msdl.deployment.federates"
        :key="federate.objectHandle"
        :value="federate.objectHandle"
      >
        <AccordionTrigger class="bg-card-foreground/5 py-2 rounded-none px-4">{{
          federate.name
        }}</AccordionTrigger>
        <AccordionContent class="px-4">
          <template v-if="federate.units.length > 0">
            <h4 class="text-xs/6 font-semibold mt-2">Units</h4>
            <ul>
              <li
                v-for="unit in getFederateUnits(federate.units)"
                :key="unit.objectHandle"
                class="flex items-center justify-between gap-1"
              >
                <div class="flex items-center gap-1">
                  <MilSymbol :sidc="unit.sidc" :size="16" />
                  <Button variant="link" size="sm" @click="selectStore.activeItem = unit"
                    >{{ unit.label }}
                  </Button>
                </div>
                <AssignToFederateDropdown
                  class="ml-auto"
                  :object-handle="unit.objectHandle"
                  @assign-to-federate="assignUnitToFederate"
                ></AssignToFederateDropdown>
              </li>
            </ul>
          </template>
          <template v-if="federate.equipment.length > 0">
            <h4 class="text-xs/6 font-semibold mt-2">Equipment</h4>
            <ul>
              <li
                v-for="equipmentItem in getFederateEquipment(federate.equipment)"
                :key="equipmentItem?.objectHandle"
                class="flex items-center justify-between gap-1"
              >
                <div class="flex items-center gap-1">
                  <MilSymbol :sidc="equipmentItem.sidc" :size="16" />
                  <Button variant="link" size="sm" @click="selectStore.activeItem = equipmentItem"
                    >{{ equipmentItem.label }}
                  </Button>
                </div>
                <AssignToFederateDropdown
                  class="ml-auto"
                  :object-handle="equipmentItem.objectHandle"
                  @assign-to-federate="assignEquipmentToFederate"
                ></AssignToFederateDropdown>
              </li>
            </ul>
          </template>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
