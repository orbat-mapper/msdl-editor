<script setup lang="ts">
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, TableOfContentsIcon as SelectIcon } from "lucide-vue-next";
import { Switch } from "@/components/ui/switch";
import { useLayerStore } from "@/stores/layerStore.ts";
import ForceSideMenu from "@/components/ForceSideMenu.vue";
import { Badge } from "@/components/ui/badge";
import { computed } from "vue";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import TreeDND from "@/components/orbat/TreeDND.vue";

const { sideObjectHandle } = defineProps<{
  sideObjectHandle: string;
}>();
const { msdl } = useScenarioStore();

const selectStore = useSelectStore();

const layerStore = useLayerStore();

// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
const side = computed(() => msdl.value?.getForceSideById(sideObjectHandle)!);

/*watchEffect((onCleanup) => {
  const dndFunction = combine({});

  onCleanup(() => {
    dndFunction();
  });
})*/
const toggleSide = (id: string) => {
  if (layerStore.layers.has(id)) {
    layerStore.layers.delete(id);
  } else {
    layerStore.layers.add(id);
  }
};
</script>

<template>
  <AccordionItem :value="side.objectHandle">
    <AccordionTrigger class="bg-card-foreground/5 py-1 rounded-none px-4 group">
      <div class="flex items-center gap-2 h-9">
        <span class="font-medium">{{ side.name }}</span
        ><Badge v-if="side === msdl?.primarySide">Primary</Badge>
      </div>
      <template #icon>
        <div class="flex items-center gap-2">
          <Button
            class="opacity-0 group-hover:opacity-100"
            type="button"
            variant="ghost"
            title="Show details"
            size="icon"
            @click.stop="selectStore.activeItem = side"
            ><SelectIcon
          /></Button>
          <Switch
            @click.stop
            :modelValue="layerStore.layers.has(side.objectHandle)"
            @update:modelValue="toggleSide(side.objectHandle)"
            title="Toggle visibility"
          />
          <ForceSideMenu :side="side" />
          <ChevronDown
            class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-90"
          />
        </div>
      </template>
    </AccordionTrigger>
    <AccordionContent>
      <template v-if="side.forces.length > 0">
        <div v-for="force in side.forces" :key="force.objectHandle" class="my-2">
          <div class="flex items-center justify-between pr-4">
            <h4 class="text-sm ml-4">{{ force.name }}</h4>
            <div class="gap-1 flex items-center">
              <Badge v-if="force.militaryService" variant="secondary">{{
                force.militaryService
              }}</Badge>
              <Badge v-if="force.countryCode" variant="secondary">{{ force.countryCode }}</Badge>
            </div>
          </div>
          <TreeDND :sideObjectHandle="side.objectHandle" />
        </div>
      </template>
      <TreeDND v-else :sideObjectHandle="side.objectHandle" />
    </AccordionContent>
  </AccordionItem>
</template>
