<script setup lang="ts">
import { type ForceSide, type Unit, type UnitSymbolModifiersType } from "@orbat-mapper/msdllib";
import DescriptionList from "@/components/DescriptionList.vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import { useToggle } from "@vueuse/core";
import { PencilIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { computed } from "vue";
import { useSelectStore } from "@/stores/selectStore.ts";

const {
  msdl,
  modifyScenario: { updateForceSide },
} = useScenarioStore();
const selectStore = useSelectStore();

const props = defineProps<{
  item: Unit;
}>();

const modifiers = computed(() => {
  return props.item.symbolModifiers;
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

// Obtain new symbolIdentifier if msdl is updated following 'triggerRef(msdl)'
function getSymbolIdentifier(): string | null {
  const item = msdl.value?.getUnitOrEquipmentById(props.item.objectHandle) ?? null;
  return item?.symbolIdentifier ?? null;
}

const selectedName = computed(() => (selectStore.activeItem as Unit).label);
</script>

<template>
  <div class="flex items-center justify-between mt-1">
    <h4 class="text-sm font-bold">Unit item</h4>
    <div class="flex items-center gap-1">
      <!--      <Button-->
      <!--        type="button"-->
      <!--        variant="ghost"-->
      <!--        size="icon"-->
      <!--        @click="toggleEditForm()"-->
      <!--        :disabled="showEditForm"-->
      <!--      >-->
      <!--        <PencilIcon />-->
      <!--      </Button>-->
    </div>
  </div>
  <DescriptionList class="divide-y divide-border">
    <DescriptionItem label="Name">{{ selectedName || "n/a" }}</DescriptionItem>
    <DescriptionItem label="Symbol identifier">{{ getSymbolIdentifier() }}</DescriptionItem>
    <div v-if="modifiers" class="ml-6">
      <template v-for="dlItem in dlItems" :key="dlItem.value">
        <DescriptionItem v-if="modifiers[dlItem.value]" :label="dlItem.label">
          {{ modifiers[dlItem.value] }}
        </DescriptionItem>
      </template>
    </div>
    <DescriptionItem label="Object handle" class="text-muted-foreground">{{
      props.item.objectHandle
    }}</DescriptionItem>
  </DescriptionList>
</template>
