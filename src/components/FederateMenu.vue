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
import { EllipsisVertical as DotsVerticalIcon } from "lucide-vue-next";
import { Federate } from "@orbat-mapper/msdllib";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { ref } from "vue";

const props = defineProps<{
  federate: Federate;
}>();
const {
  msdl,
  modifyScenario: { updateFederate },
} = useScenarioStore();

const emits = defineEmits(["rename"]);

function rename() {
  emits("rename");
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
      <DropdownMenuLabel>Federate actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @select.prevent="rename()">Rename</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
