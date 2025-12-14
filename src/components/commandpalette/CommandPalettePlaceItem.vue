<script setup lang="ts">
import { MapPinIcon, SquareIcon } from "lucide-vue-next";

import { type GeoSearchProperties, type PhotonSearchResult } from "@/composables/geosearching";
import type { Feature, Point } from "geojson";

import { distance } from "@turf/distance";
import { formatLength } from "@/utils.ts";

const props = defineProps<{
  item: PhotonSearchResult;
  center?: number[] | null;
}>();

function getFromCenter(f: Feature<Point, GeoSearchProperties>) {
  const length =
    props.center && distance(props.center, f.geometry.coordinates, { units: "meters" });
  return length ? formatLength(length) : "";
}
</script>

<template>
  <div class="justify-center flex w-6">
    <component
      :is="item.properties.extent ? SquareIcon : MapPinIcon"
      class="h-5 w-5 text-gray-400"
      aria-hidden="true"
    />
  </div>
  <div class="grid grid-cols-[auto,1fr] w-full">
    <span>{{ item.properties.name }}</span>
    <div class="text-sm text-muted-foreground flex justify-between w-full">
      <div class="space-x-1">
        <span class="uppercase">{{ item.properties.category }}</span>
        <span>{{ item.properties.city }}</span>
        <span>{{ item.properties.state }}</span>
        <span>{{ item.properties.country }}</span>
      </div>
      <span class="">{{ getFromCenter(item) }}</span>
    </div>
  </div>
</template>
