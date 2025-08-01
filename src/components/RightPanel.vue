<script setup lang="ts">
import DetailsPanel from "@/components/DetailsPanel.vue";
import DeploymentPanel from "@/components/DeploymentPanel.vue";
import type { EquipmentItem, ForceSide, Unit } from "@orbat-mapper/msdllib";
import type { LngLatBoundsLike, LngLatLike } from "maplibre-gl";
import { useSelectStore } from "@/stores/selectStore.ts";
import { isForceSide, isUnitOrEquipment } from "@/utils.ts";
import bbox from "@turf/bbox";
import type { GeoJSON } from "geojson";
const { mlMap } = defineProps<{
  mlMap?: maplibregl.Map;
}>();

const selectStore = useSelectStore();

function flyToItem(item: EquipmentItem | Unit | ForceSide) {
  if (isUnitOrEquipment(item)) {
    const coordinates = item.location as LngLatLike;
    if (!coordinates) return;
    mlMap?.flyTo({ center: coordinates, zoom: 16 });
  } else if (isForceSide(item)) {
    const bounds = bbox(item.toGeoJson({ includeEquipment: true, includeUnits: true }) as GeoJSON);
    if (bounds.some((v) => v === Infinity || v === -Infinity)) {
      return;
    }
    mlMap?.fitBounds(bounds as LngLatBoundsLike, {
      padding: { top: 50, bottom: 50, left: 200, right: 200 },
    });
  }
}
</script>
<template>
  <DetailsPanel
    v-if="selectStore.activeItem && mlMap"
    :item="selectStore.activeItem"
    class="pointer-events-auto absolute right-2 top-[150px]"
    @flyTo="flyToItem"
    :mlMap
  />
  <DeploymentPanel
    v-if="selectStore.activeFederate"
    :federate="selectStore.activeFederate"
    class="pointer-events-auto absolute right-2 top-[150px]"
  />
</template>
