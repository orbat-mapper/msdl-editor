import { computed, onMounted, onUnmounted, ref } from "vue";
import { Map as MapLibreMap } from "maplibre-gl";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import type { Position } from "geojson";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { formatDecimalDegrees } from "@/utils.ts";
import {
  getPositionDropItem,
  isEquipmentItemDragItem,
  isPositionDropItem,
  isUnitDragItem,
} from "@/types/draggables.ts";

export function useMapDrop(map: MapLibreMap) {
  let dndCleanup = () => {};
  const {
    modifyScenario: { updateItemLocation },
  } = useScenarioStore();
  const isDragging = ref(false);
  const dropPosition = ref<Position>([0, 0]);
  const clientRect = map.getContainer().getBoundingClientRect();

  const formattedPosition = computed(() =>
    isDragging.value ? formatDecimalDegrees(dropPosition.value) : "",
  );

  onMounted(() => {
    const mlMap = map;
    dndCleanup = dropTargetForElements({
      element: mlMap.getContainer(),
      canDrop: ({ source }) => isUnitDragItem(source.data) || isEquipmentItemDragItem(source.data),
      getData: ({ input }) => {
        const lngLatObj = mlMap.unproject([input.pageX - clientRect.x, input.pageY - clientRect.y]);
        const position = [lngLatObj.lng, lngLatObj.lat] as Position;
        return getPositionDropItem({
          position,
        });
      },
      onDragEnter: () => {
        isDragging.value = true;
      },
      onDragLeave: () => {
        isDragging.value = false;
      },
      onDrag: ({ self }) => {
        dropPosition.value = self.data.position as Position;
      },
      onDrop: ({ source, self }) => {
        isDragging.value = false;
        const dragData = source.data;
        if (!isUnitDragItem(dragData) && !isEquipmentItemDragItem(dragData)) {
          return;
        }
        if (isPositionDropItem(self.data)) {
          updateItemLocation(dragData.item.objectHandle, self.data.position);
        }
      },
    });
  });

  onUnmounted(() => dndCleanup());

  return { isDragging, dropPosition, formattedPosition };
}
