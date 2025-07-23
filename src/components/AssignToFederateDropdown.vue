<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BoxIcon, EllipsisVertical as DotsVerticalIcon } from "lucide-vue-next";
import { useScenarioStore } from "@/stores/scenarioStore";
import { computed } from "vue";
import type { EquipmentItem, Unit } from "@orbat-mapper/msdllib";

const props = defineProps<{ objectHandle: string }>();

const emit = defineEmits<{
  assignToFederate: [objectHandle: string, federate: string];
}>();

const { msdl } = useScenarioStore();

const federates = computed(() => {
  return msdl.value?.deployment?.federates || [];
});

const unit = computed(() => {
  return msdl.value?.getUnitOrEquipmentById(props.objectHandle);
});

function assignToFederate(fed: string) {
  emit("assignToFederate", props.objectHandle, fed);
}

function otherFederates(item?: Unit | EquipmentItem) {
  return federates.value.filter(
    (fed) =>
      item && !fed.units.includes(item.objectHandle) && !fed.equipment.includes(item.objectHandle),
  );
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button @click.stop variant="ghost" size="icon">
        <DotsVerticalIcon class="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Assign to federate:</DropdownMenuLabel>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <DropdownMenuItem
        @select="assignToFederate(federate.objectHandle)"
        :disabled="!msdl"
        v-for="federate in otherFederates(unit)"
        :key="federate.objectHandle"
        :value="federate.objectHandle"
      >
        <BoxIcon />
        {{ federate.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
