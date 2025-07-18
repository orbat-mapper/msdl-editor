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

interface Props {
  objectHandle: string;
  allUnits?: boolean;
  allEquipment?: boolean;
}
const { objectHandle, allUnits = false, allEquipment = false } = defineProps<Props>();

const emit = defineEmits<{
  assignToFederate: [objectHandle: string, federate: string];
}>();

const { msdl } = useScenarioStore();

const federates = computed(() => {
  return msdl.value?.deployment?.federates || [];
});

function assignToFederate(fed: string) {
  emit("assignToFederate", objectHandle, fed);
}

function otherFederates(handle: string) {
  return federates.value.filter(
    (fed) =>
      handle &&
      !fed.units.includes(handle) &&
      !fed.equipment.includes(handle) &&
      fed.objectHandle !== handle,
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
      <DropdownMenuLabel>
        Assign {{ allUnits || allEquipment ? "all" : "" }} to federate:
      </DropdownMenuLabel>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <DropdownMenuItem
        @select="assignToFederate(federate.objectHandle)"
        :disabled="!msdl"
        v-for="federate in otherFederates(objectHandle)"
        :key="federate.objectHandle"
        :value="federate.objectHandle"
      >
        <BoxIcon />
        {{ federate.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
