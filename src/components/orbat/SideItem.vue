<script setup lang="ts">
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, TableOfContentsIcon as SelectIcon } from "lucide-vue-next";
import { Switch } from "@/components/ui/switch";
import { useLayerStore } from "@/stores/layerStore.ts";
import ForceSideMenu from "@/components/ForceSideMenu.vue";
import { Badge } from "@/components/ui/badge";
import { computed, ref, useTemplateRef, watchEffect } from "vue";
import { Button } from "@/components/ui/button";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import TreeDND from "@/components/orbat/TreeDND.vue";
import { unrefElement, useTimeoutFn } from "@vueuse/core";
import { useSideStore } from "@/stores/uiStore.ts";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { getSideDragItem, isOrbatItemDragItem } from "@/types/draggables.ts";
import {
  attachInstruction,
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";

const { sideObjectHandle } = defineProps<{
  sideObjectHandle: string;
}>();

const dropRef = useTemplateRef("dropRef");
const isDraggedOver = ref(false);
const { msdl } = useScenarioStore();

const selectStore = useSelectStore();
const sideStore = useSideStore();

const layerStore = useLayerStore();

// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
const side = computed(() => msdl.value?.getForceSideById(sideObjectHandle)!);
const instruction = ref<Extract<
  Instruction,
  { type: "reorder-above" | "reorder-below" | "make-child" }
> | null>(null);

const {
  isPending,
  start: startOpenTimeout,
  stop: stopOpenTimeout,
} = useTimeoutFn(
  () => {
    expandItem();
  },
  500,
  { immediate: false },
);

function expandItem() {
  if (!sideStore.openSideItems.includes(side.value.objectHandle)) {
    sideStore.openSideItems.push(side.value.objectHandle);
  }
}

watchEffect((onCleanup) => {
  const dropElement = unrefElement(dropRef.value);
  if (!dropElement) return;

  const dndFunction = combine(
    dropTargetForElements({
      element: dropElement,
      getData: ({ input, element }) => {
        const data = getSideDragItem({ item: side.value });

        return attachInstruction(data, {
          input,
          element,
          indentPerLevel: 16,
          currentLevel: 0,
          mode: "standard",
          block: ["reorder-above", "reorder-below"],
        });
      },
      canDrop: ({ source }) => {
        if (isOrbatItemDragItem(source.data)) {
          return true;
        }
        return false;
      },
      onDrag: ({ self }) => {
        instruction.value = extractInstruction(self.data) as typeof instruction.value;
      },
      onDragEnter: () => {
        isDraggedOver.value = true;
        if (!isPending.value) startOpenTimeout();
      },
      onDragLeave: () => {
        isDraggedOver.value = false;
        instruction.value = null;
        stopOpenTimeout();
      },
      onDrop: (args) => {
        instruction.value = null;
        expandItem();
      },
    }),
  );

  onCleanup(() => {
    dndFunction();
  });
});
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
    <AccordionTrigger
      class="bg-card-foreground/5 py-1 rounded-none px-4 group relative"
      ref="dropRef"
    >
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
      <div
        v-if="instruction"
        class="absolute h-full inset-0 w-full border-blue-500"
        :class="{
          '!border-b-2': instruction?.type === 'reorder-below',
          '!border-t-2': instruction?.type === 'reorder-above',
          '!border-2 rounded': instruction?.type === 'make-child',
        }"
      />
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
