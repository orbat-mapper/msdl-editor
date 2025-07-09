<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EyeIcon, PlusIcon } from "lucide-vue-next";
import { EllipsisVertical as DotsVerticalIcon } from "lucide-vue-next";
import { useSideStore } from "@/stores/uiStore.ts";
import { useScenarioStore } from "@/stores/scenarioStore";

const emit = defineEmits(["toggleVisibility", "createForceSide"]);

const sideStore = useSideStore();
const { msdl } = useScenarioStore();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button @click.stop variant="ghost" size="icon">
        <DotsVerticalIcon class="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Side actions</DropdownMenuLabel>
      <DropdownMenuItem @select="emit('createForceSide')" :disabled="!msdl">
        <PlusIcon />
        Create Force Side
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @select.prevent="emit('toggleVisibility')">
        <EyeIcon />
        Toggle layer visibility
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuCheckboxItem v-model="sideStore.hideEmptySides"
        >Hide empty sides
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
