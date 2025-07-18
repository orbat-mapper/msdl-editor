<script setup lang="ts">
import { TreeItem, TreeRoot } from "reka-ui";
import { ChevronRightIcon } from "lucide-vue-next";
import { type ForceSide } from "@orbat-mapper/msdllib";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSelectStore } from "@/stores/selectStore.ts";

const props = defineProps<{ side: ForceSide }>();
const selectStore = useSelectStore();

// tmp
function getChildren(item: any) {
  const tmp = [...(item?.subordinates ?? []), ...(item?.equipment ?? [])];
  return tmp.length > 0 ? tmp : undefined;
}

function onSelect(item: any) {
  selectStore.activeItem = item.value;
}
</script>
<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    class="select-none list-none rounded-lg text-sm p-1"
    :items="[...side.rootUnits, ...side.equipment]"
    :getKey="(item) => item.objectHandle"
    :getChildren="getChildren"
  >
    <TreeItem
      v-for="item in flattenItems"
      v-slot="{ isExpanded, handleToggle }"
      :key="item._id"
      :style="{ 'padding-left': `${item.level - 0.5}rem` }"
      v-bind="item.bind"
      class="flex items-center py-1 px-2 my-0.5 rounded outline-hidden focus:ring-grass8 focus:ring-2 data-selected:bg-grass4"
      @keydown.up.stop
      @keydown.down.stop
      @select="onSelect(item)"
    >
      <template v-if="item.hasChildren">
        <button type="button" tabindex="-1" @click.stop="handleToggle">
          <ChevronRightIcon
            class="size-6 text-gray-500 transition hover:font-medium hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100 mr-1"
            :class="{
              'rotate-90': isExpanded,
            }"
          />
        </button>
      </template>
      <span v-else class="h-6 w-6 mr-1" />
      <div class="flex items-center gap-1">
        <MilSymbol :sidc="item.value.sidc" :size="16" />
        <span :class="selectStore.activeItem === item.value ? 'font-bold' : ''">{{
          item.value.label
        }}</span>
      </div>
    </TreeItem>
  </TreeRoot>
</template>
