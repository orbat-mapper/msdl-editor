<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical as DotsVerticalIcon } from "lucide-vue-next";
import { computed } from "vue";
import { type ForceSide, StandardIdentity } from "@orbat-mapper/msdllib";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";

const props = defineProps<{
  side: ForceSide;
}>();
const {
  msdl,
  modifyScenario: { setPrimarySide, setSideAffiliation },
} = useScenarioStore();
const selectStore = useSelectStore();

function selectSide() {
  selectStore.activeItem = props.side;
}

const affiliation = computed({
  get: (): string => (msdl.value && props.side.getAffiliation()) || StandardIdentity.Unknown,
  set: (v: string) => {
    setSideAffiliation(props.side, v as StandardIdentity);
  },
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button @click.stop variant="ghost" size="icon">
        <DotsVerticalIcon class="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>ForceSide actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @select.prevent="selectSide">View details</DropdownMenuItem>
      <DropdownMenuItem @select.prevent="setPrimarySide(side)"
        >Set as primary side</DropdownMenuItem
      >
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Set affiliation</DropdownMenuSubTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup v-model="affiliation">
            <DropdownMenuRadioItem
              v-for="(v, k) in StandardIdentity"
              :key="k"
              :value="v"
              @select.prevent
              >{{ k }}</DropdownMenuRadioItem
            >
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
