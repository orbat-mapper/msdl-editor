<script setup lang="ts">
import { TreeRoot } from "reka-ui";
import TreeItemDND from "./TreeItemDND.vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { computed, ref, triggerRef, watchEffect } from "vue";
// import { updateTree } from "./utils";
import type { OrbatTreeItem } from "@/components/orbat/types.ts";
import { mapItem } from "@/components/orbat/utils.ts";
import {
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { isOrbatItemDragItem } from "@/types/draggables.ts";

const { sideObjectHandle } = defineProps<{ sideObjectHandle: string }>();

const { msdl, modifyScenario } = useScenarioStore();

function getChildren(item: OrbatTreeItem) {
  const children = [...(item?.subordinates ?? []), ...(item?.equipment ?? [])].map(mapItem);
  return children.length > 0 ? children : undefined;
}

const defaultValue = ref([]);

const items = computed(() => {
  const side = msdl.value?.getForceSideById(sideObjectHandle);
  if (!side) return [];
  return [...side.rootUnits, ...side.equipment].map(mapItem);
});

let i = 0;

const dummyKey = computed(() => {
  if (!msdl.value) {
    return 0;
  }
  return i++;
});

watchEffect((onCleanup) => {
  const dndFunction = combine(
    monitorForElements({
      onDrop(args) {
        const { location, source } = args;
        // didn't drop on anything
        if (!location.current.dropTargets.length) return;
        const target = location.current.dropTargets[0];
        const instruction: Instruction | null = extractInstruction(target.data);
        if (!(isOrbatItemDragItem(source.data) && isOrbatItemDragItem(target.data))) {
          return;
        }
        if (instruction?.type === "make-child") {
          msdl.value?.setUnitForceRelation(
            source.data.item.objectHandle,
            target.data.item.objectHandle,
          );
          triggerRef(msdl);
        }

        // if (instruction !== null) {
        //   items.value =
        //     updateTree(items.value, {
        //       type: "instruction",
        //       instruction,
        //       itemId,
        //       targetId,
        //     }) ?? [];
        // }
      },
    }),
  );

  onCleanup(() => {
    dndFunction();
  });
});
</script>
<template>
  <div class="flex w-full">
    <TreeRoot
      v-slot="{ flattenItems }"
      class="list-none select-none rounded-md p-2 text-sm font-medium w-full"
      :items
      :getKey="(item) => item.objectHandle"
      :getChildren="getChildren"
      v-model:expanded="defaultValue"
      :key="dummyKey"
    >
      <TreeItemDND
        v-for="item in flattenItems"
        :key="item._id"
        :item="item"
        v-bind="item.bind"
        :style="{ 'padding-left': `${item.level - 0.5}rem` }"
        class="flex w-full items-center py-1.5 px-2 rounded outline-none focus:ring-ring focus:ring-2 data-[selected]:bg-muted-foreground/20"
      />
    </TreeRoot>
  </div>
</template>
