<script setup lang="ts">
import { TreeRoot } from "reka-ui";
import TreeItemDND from "./TreeItemDND.vue";
import { computed } from "vue";
// import { updateTree } from "./utils";
import type { OrbatTreeItem } from "@/components/orbat/types.ts";
import { mapItem } from "@/components/orbat/utils.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useExpandedStore } from "@/stores/expandedStore.ts";

const { sideObjectHandle } = defineProps<{ sideObjectHandle: string }>();

const { msdl } = useScenarioStore();

function getChildren(item: OrbatTreeItem) {
  const children = [...(item?.subordinates ?? []), ...(item?.equipment ?? [])].map(mapItem);
  return children.length > 0 ? children : undefined;
}

const expandedStore = useExpandedStore();

if (!expandedStore.expandedItems.has(sideObjectHandle)) {
  expandedStore.expandedItems.set(sideObjectHandle, []);
}

const expanded = computed({
  get: () => expandedStore.expandedItems.get(sideObjectHandle) ?? [],
  set: (value) => expandedStore.expandedItems.set(sideObjectHandle, value),
});

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
</script>
<template>
  <div class="flex w-full">
    <TreeRoot
      v-slot="{ flattenItems }"
      class="list-none select-none rounded-md p-2 text-sm font-medium w-full"
      :items
      :getKey="(item) => item.objectHandle"
      :getChildren="getChildren"
      v-model:expanded="expanded"
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
