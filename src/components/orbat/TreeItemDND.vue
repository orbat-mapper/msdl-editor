<script setup lang="ts">
import { computed, h, ref, render, useTemplateRef, watchEffect } from "vue";
import { type FlattenedItem, TreeItem } from "reka-ui";
import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  attachInstruction,
  extractInstruction,
  type Instruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { ChevronDownIcon } from "lucide-vue-next";
import { unrefElement, useTimeoutFn } from "@vueuse/core";
import MilSymbol from "@/components/MilSymbol.vue";
import { UNALLOCATED_FEDERATE, useSelectStore } from "@/stores/selectStore.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import {
  getEquipmentItemDragItem,
  getUnitDragItem,
  isEquipmentItemDragItem,
  isUnitDragItem,
  isUnitOrEquipmentItemDragItem,
} from "@/types/draggables.ts";
import type { OrbatTreeItem } from "@/components/orbat/types.ts";
import { Badge } from "@/components/ui/badge";
import type { Federate } from "@orbat-mapper/msdllib";

const props = defineProps<{
  item: FlattenedItem<OrbatTreeItem>;
}>();

const elRef = useTemplateRef("elRef");
const isDragging = ref(false);
const isDraggedOver = ref(false);
const isInitialExpanded = ref(false);
const instruction = ref<Extract<
  Instruction,
  { type: "reorder-above" | "reorder-below" | "make-child" }
> | null>(null);

const { msdl } = useScenarioStore();

const selectStore = useSelectStore();

const mode = computed(() => {
  if (props.item.hasChildren) return "expanded";
  if (props.item.index + 1 === props.item.parentItem?.childrenCount) return "last-in-group";
  return "standard";
});

const federate = computed(() => {
  return msdl.value?.getFederateOfUnitOrEquipment(props.item._id) || UNALLOCATED_FEDERATE;
});

watchEffect((onCleanup) => {
  const currentElement = unrefElement(elRef.value as never);

  if (!currentElement) return;

  const item = { ...props.item.value, level: props.item.level, id: props.item._id };

  const expandItem = () => {
    if (!elRef.value?.isExpanded) {
      elRef.value?.handleToggle();
    }
  };

  const closeItem = () => {
    if (elRef.value?.isExpanded) {
      elRef.value?.handleToggle();
    }
  };

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

  const dndFunction = combine(
    draggable({
      element: currentElement as HTMLElement,
      getInitialData: () =>
        props.item.value.itemType === "unit"
          ? getUnitDragItem({ item: props.item.value })
          : getEquipmentItemDragItem({ item: props.item.value }),
      onDragStart: () => {
        isDragging.value = true;
        isInitialExpanded.value = elRef.value?.isExpanded ?? false;
        closeItem();
      },
      onDrop: () => {
        isDragging.value = false;
        if (isInitialExpanded.value) expandItem();
      },
      onGenerateDragPreview({ nativeSetDragImage }) {
        setCustomNativeDragPreview({
          getOffset: pointerOutsideOfPreview({ x: "16px", y: "8px" }),
          render: ({ container }) => {
            return render(
              h(MilSymbol, {
                sidc: item.sidc,
                size: 16,
              }),
              // h(
              //   "div",
              //   { class: "bg-white  rounded-md text-sm font-medium px-3 py-1.5" },
              //   item.label,
              // ),
              container,
            );
          },
          nativeSetDragImage,
        });
      },
    }),

    dropTargetForElements({
      element: currentElement,
      getData: ({ input, element, source }) => {
        const isUnit = props.item.value.itemType === "unit";
        const data = isUnit
          ? getUnitDragItem({ item: props.item.value })
          : getEquipmentItemDragItem({ item: props.item.value });

        return attachInstruction(data, {
          input,
          element,
          indentPerLevel: 16,
          currentLevel: props.item.level,
          mode: mode.value,
          block: isEquipmentItemDragItem(source.data)
            ? isUnit
              ? ["reorder-below", "reorder-above"]
              : ["make-child"]
            : [],
        });
      },
      canDrop: ({ source }) => {
        if (isUnitOrEquipmentItemDragItem(source.data)) {
          const { item: sourceItem } = source.data;
          if (sourceItem.objectHandle === item.id) {
            return false;
          }
          if (isUnitDragItem(source.data) && props.item.value.itemType === "equipment") {
            return false;
          }
          if (isEquipmentItemDragItem(source.data) && props.item.value.itemType === "equipment") {
            return false;
          }

          return true;
        }
        return false;
      },

      onDrag: ({ self }) => {
        instruction.value = extractInstruction(self.data) as typeof instruction.value;
      },
      onDragEnter: ({ source }) => {
        if (
          isUnitOrEquipmentItemDragItem(source.data) &&
          source.data.item.objectHandle !== item.id
        ) {
          isDraggedOver.value = true;
          if (!isPending.value) startOpenTimeout();
        } else {
        }
      },
      onDragLeave: () => {
        isDraggedOver.value = false;
        instruction.value = null;
        stopOpenTimeout();
      },
      onDrop: ({ location }) => {
        isDraggedOver.value = false;
        instruction.value = null;
        stopOpenTimeout();
      },
      getIsSticky: () => true,
    }),

    monitorForElements({
      canMonitor: ({ source }) => {
        return source.data.id !== item.id;
      },
    }),
  );

  // Cleanup dnd function
  onCleanup(() => dndFunction());
});

function onSelect(item: any) {
  selectStore.activeItem = msdl.value?.getUnitOrEquipmentById(item._id) ?? null;
}

function openFederateDetail() {
  selectStore.activeFederate = federate.value;
}
</script>
<template>
  <TreeItem
    ref="elRef"
    :id="`oi-${item._id}`"
    v-slot="{ isExpanded, handleToggle }"
    :value="item.value"
    :level="item.level"
    class="relative w-full border-none"
    :class="{ 'opacity-50': isDragging }"
    @select="onSelect(item)"
  >
    <button
      v-if="item.hasChildren"
      tabindex="-1"
      type="button"
      @click.stop="handleToggle"
      class="pr-1"
    >
      <ChevronDownIcon class="size-5 transition" :class="{ '-rotate-90': !isExpanded }" />
    </button>
    <span v-else class="size-5 mr-1" />
    <MilSymbol :sidc="item.value.sidc" :size="16" />
    <div class="pl-2" :class="selectStore.activeItem?.objectHandle === item._id ? 'font-bold' : ''">
      {{ item.value.label }}
    </div>
    <div
      v-if="instruction"
      class="absolute h-full w-full top-0 border-blue-500"
      :style="{
        left: `${instruction?.currentLevel * instruction?.indentPerLevel - 16}px`,
        width: `calc(100% - ${instruction?.currentLevel * instruction?.indentPerLevel}px)`,
      }"
      :class="{
        '!border-b-2': instruction?.type === 'reorder-below',
        '!border-t-2': instruction?.type === 'reorder-above',
        '!border-2 rounded': instruction?.type === 'make-child',
      }"
    ></div>
    <Badge class="ml-auto" @click.stop="openFederateDetail">{{ federate.name }}</Badge>
  </TreeItem>
</template>
