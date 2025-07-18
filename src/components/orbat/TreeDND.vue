<script setup lang="ts">
import { TreeRoot } from "reka-ui";
import TreeItemDND from "./TreeItemDND.vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { computed, ref, toRaw, watch, watchEffect } from "vue";
import {
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
// import { updateTree } from "./utils";
import { type EquipmentItem, type ForceSide, Unit } from "@orbat-mapper/msdllib";
import type { OrbatTreeItem } from "@/components/orbat/types.ts";

const { side } = defineProps<{ side: ForceSide }>();

const selectedItems = ref([]);

function getChildren(item: OrbatTreeItem) {
  const children = [...(item?.subordinates ?? []), ...(item?.equipment ?? [])].map(mapItem);
  return children.length > 0 ? children : undefined;
}

const defaultValue = ref([]);

function mapItem(item: Unit | EquipmentItem): OrbatTreeItem {
  if (item instanceof Unit) {
    return {
      label: item.label,
      sidc: item.sidc,
      itemType: "unit",
      objectHandle: item.objectHandle,
      subordinates: item.subordinates,
      equipment: item.equipment,
    };
  }

  return {
    label: item.label,
    sidc: item.sidc || "10031500000000000000",
    itemType: "equipment",
    objectHandle: item.objectHandle,
  };
}

const items = computed(() => {
  return [...side.rootUnits, ...side.equipment].map(mapItem);
});

watch(defaultValue, () => {
  console.log("Selected items:", toRaw(defaultValue.value));
});

watchEffect((onCleanup) => {
  const dndFunction = combine(
    monitorForElements({
      onDrop(args) {
        // const { location, source } = args;
        // // didn't drop on anything
        // if (!location.current.dropTargets.length) return;
        //
        // const itemId = source.data.id as string;
        // const target = location.current.dropTargets[0];
        // const targetId = target.data.id as string;
        //
        // const instruction: Instruction | null = extractInstruction(target.data);
        //
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
