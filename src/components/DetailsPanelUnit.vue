<script setup lang="ts">
import { type Unit, type UnitSymbolModifiersType } from "@orbat-mapper/msdllib";
import DescriptionList from "@/components/DescriptionList.vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import { useToggle } from "@vueuse/core";
import { PencilIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { computed, watch } from "vue";
import UnitItemEditForm from "@/components/UnitItemEditForm.vue";

const {
  modifyScenario: { updateUnit },
} = useScenarioStore();

const { item } = defineProps<{
  item: Unit;
}>();

watch(
  () => item.name,
  (newItem) => {
    console.log("DetailsPanelUnit item changed:", newItem);
  },
  { deep: true },
);

const modifiers = computed(() => {
  return item.symbolModifiers;
});

const [showEditForm, toggleEditForm] = useToggle(false);

const dlItems: { label: string; value: keyof UnitSymbolModifiersType }[] = [
  { label: "Echelon", value: "echelon" },
  { label: "Unique designation", value: "uniqueDesignation" },
  { label: "Reinforced/reduced", value: "reinforcedReduced" },
  { label: "Staff comments", value: "staffComments" },
  { label: "Additional info", value: "additionalInfo" },
  { label: "Combat effectiveness", value: "combatEffectiveness" },
  { label: "Higher formation", value: "higherFormation" },
  { label: "IFF", value: "iff" },
  { label: "Special C2HQ", value: "specialC2HQ" },
];

function onUpdate(data: Partial<Unit>) {
  toggleEditForm();
  updateUnit(item.objectHandle, data);
}
</script>

<template>
  <div class="flex items-center justify-between mt-1">
    <h4 class="text-sm font-bold">Unit item {{ item.label }}</h4>
    <div class="flex items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        @click="toggleEditForm()"
        :disabled="showEditForm"
      >
        <PencilIcon />
      </Button>
    </div>
  </div>
  <UnitItemEditForm v-if="showEditForm" :item @cancel="toggleEditForm()" @update="onUpdate" />
  <DescriptionList v-else class="divide-y divide-border">
    <DescriptionItem label="Name">{{ item.name || "n/a" }}</DescriptionItem>
    <DescriptionItem label="Symbol identifier">{{ item.symbolIdentifier }}</DescriptionItem>
    <div v-if="modifiers" class="ml-6">
      <template v-for="dlItem in dlItems" :key="dlItem.value">
        <DescriptionItem v-if="modifiers[dlItem.value]" :label="dlItem.label">
          {{ modifiers[dlItem.value] }}
        </DescriptionItem>
      </template>
    </div>
    <DescriptionItem label="Object handle" class="text-muted-foreground">{{
      item.objectHandle
    }}</DescriptionItem>
  </DescriptionList>
</template>
