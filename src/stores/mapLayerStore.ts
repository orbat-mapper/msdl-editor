import { defineStore } from "pinia";
import { ref } from "vue";
import type { EnumItem } from "@/components/types.ts";
import type { StyleSpecification } from "maplibre-gl";

export type BaseLayer = "none" | "osm" | "satellite" | "default" | "demo";

export const mapProviders: EnumItem<BaseLayer>[] = [
  { value: "default", label: "OpenFreeMap" },
  { value: "osm", label: "OpenStreetMap" },
  { value: "satellite", label: "ESRI World imagery" },
  { value: "demo", label: "Demo tiles" },
];

export function getStyleForBaseLayer(baseLayer: BaseLayer): string | StyleSpecification {
  switch (baseLayer) {
    case "osm":
      return {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap Contributors",
            maxzoom: 19,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      };
    case "satellite":
      return {
        version: 8,
        sources: {
          satellite: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
            attribution:
              "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            maxzoom: 19,
          },
        },
        layers: [
          {
            id: "satellite",
            type: "raster",
            source: "satellite",
          },
        ],
      };

    case "demo":
      return "https://demotiles.maplibre.org/style.json"; // Placeholder for demo tiles
    default:
      return "https://tiles.openfreemap.org/styles/positron"; // Default tile server
  }
}

export const useMapLayerStore = defineStore("mapLayerSettings", () => {
  const baseLayer = ref<BaseLayer>("default");
  return { baseLayer };
});
