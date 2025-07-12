<script setup lang="ts">
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/dialogStore.ts";
import PanelDataGrid from "@/components/PanelDataGrid.vue";
import { Badge } from "@/components/ui/badge";
import ShowXMLDialog from "@/components/ShowXMLDialog.vue";
import { computed } from "vue";
import SidePanelDropdown from "@/components/SidePanelDropdown.vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import type { EquipmentItem, Unit } from "@orbat-mapper/msdllib";
const { msdl } = useScenarioStore();
const selectStore = useSelectStore();

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
</script>
<template>
  <div v-if="msdl?.deployment">
    <header class="flex items-center justify-between px-4 mt-1">
      <h3 class="text-xs/6 font-semibold uppercase">Federates</h3>
    </header>
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
                class="flex items-center gap-1"
              >
                <MilSymbol :sidc="unit.sidc" :size="16" />
                <Button variant="link" size="sm" @click="selectStore.activeItem = unit"
                  >{{ unit.label }}
                </Button>
              </li>
            </ul>
          </template>
          <template v-if="federate.equipment.length > 0">
            <h4 class="text-xs/6 font-semibold mt-2">Equipment</h4>
            <ul>
              <li
                v-for="equipmentItem in getFederateEquipment(federate.units)"
                :key="equipmentItem?.objectHandle"
                class="flex items-center gap-1"
              >
                <MilSymbol :sidc="equipmentItem.sidc" :size="16" />
                <Button variant="link" size="sm" @click="selectStore.activeItem = equipmentItem"
                  >{{ equipmentItem.label }}
                </Button>
              </li>
            </ul>
          </template>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
