import { defineStore } from "pinia";
import type { EnumBaseLayer } from "@/components/types.ts";
import type { StyleSpecification } from "maplibre-gl";
import { useLocalStorage } from "@vueuse/core";

export type BaseLayer = "none" | "osm" | "satellite" | "default" | "demo" | "wms" | "xyz";

export const mapProviders: EnumBaseLayer<BaseLayer>[] = [
  { value: "default", label: "OpenFreeMap", layerType: "default" },
  { value: "osm", label: "OpenStreetMap (raster)", layerType: "default" },
  { value: "satellite", label: "ESRI World imagery (raster)", layerType: "default" },
  { value: "demo", label: "Demo tiles", layerType: "default" },
  { value: "wms", label: "Custom WMS", layerType: "custom" },
  { value: "xyz", label: "Custom XYZ", layerType: "custom" },
];

export function getStyleForBaseLayer(
  baseLayer?: BaseLayer,
  tileUrl?: string,
): string | StyleSpecification {
  const mapProvider = mapProviders.find((mp) => mp.value === baseLayer);
  if (baseLayer && tileUrl && mapProvider?.layerType === "custom") {
    return getCustomStyleForBaseLayer(baseLayer, tileUrl);
  } else {
    return getDefaultStyleForBaseLayer(baseLayer);
  }
}

export function getCustomStyleForBaseLayer(
  baseLayer: BaseLayer,
  tileUrl: string,
): string | StyleSpecification {
  switch (baseLayer) {
    case "wms":
      return {
        version: 8,
        sources: {
          wms: {
            type: "raster",
            tiles: [tileUrl],
            tileSize: 256,
            attribution: `Custom WMS (${tileUrl})`,
          },
        },
        layers: [
          {
            id: "wms",
            type: "raster",
            source: "wms",
          },
        ],
      };
    case "xyz":
      return {
        version: 8,
        sources: {
          xyz: {
            type: "raster",
            tiles: [tileUrl],
            tileSize: 256,
            attribution: `Custom XYZ (${tileUrl})`,
          },
        },
        layers: [
          {
            id: "xyz",
            type: "raster",
            source: "xyz",
          },
        ],
      };
    default:
      return "https://tiles.openfreemap.org/styles/positron"; // Default tile server
  }
}

export function getDefaultStyleForBaseLayer(baseLayer?: BaseLayer): string | StyleSpecification {
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
  const baseLayer = useLocalStorage<BaseLayer>("baseLayer", "default");
  const customWMS = useLocalStorage<string>(
    "customWMS",
    "https://ows.terrestris.de/osm/service?service=WMS&request=GetMap&version=1.1.1&layers=TOPO-WMS%2COSM-Overlay-WMS&styles=&format=image%2Fpng&transparent=true&info_format=text%2Fhtml&tiled=false&srs=EPSG:3857&bbox={bbox-epsg-3857}&width=256&height=256",
  );
  const customXYZ = useLocalStorage<string>(
    "customXYZ",
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  );
  const getCustomTileUrl = () => (baseLayer.value === "wms" ? customWMS : customXYZ);
  const setCustomWMSUrl = (wmsUrl: string) => (customWMS.value = wmsUrl);
  const setCustomXYZUrl = (xyzUrl: string) => (customXYZ.value = xyzUrl);
  return { baseLayer, customWMS, customXYZ, getCustomTileUrl, setCustomXYZUrl, setCustomWMSUrl };
});

// WMS-example: https://service.pdok.nl/wur/landelijk-grondgebruik-nederland/wms/v1_0?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=lgn-actueel&STYLES=&FORMAT=image/png&TRANSPARENT=true&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256