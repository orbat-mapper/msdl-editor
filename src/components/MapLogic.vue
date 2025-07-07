<script setup lang="ts">
import { GeoJSONSource, Map as MlMap, type Subscription } from "maplibre-gl";
import { centroid } from "@turf/centroid";
import ms from "milsymbol";
import { computed, onUnmounted, ref, watch, watchEffect } from "vue";
import { combineSidesToJson, sortBy } from "@/utils.ts";
import { useLayerStore, useMapSettingsStore } from "@/stores/layerStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import MapContextMenu from "@/components/MapContextMenu.vue";
import type { MapContextMenuEvent } from "@/components/types.ts";
import { useUIStore } from "@/stores/uiStore.ts";
import { getStyleForBaseLayer, useMapLayerStore } from "@/stores/mapLayerStore.ts";

const props = defineProps<{ mlMap: MlMap }>();
const emit = defineEmits(["showContextMenu"]);
const { msdl } = useScenarioStore();

const isOpen = ref(false);
const mapEvent = ref<MapContextMenuEvent>();

const store = useLayerStore();
const mapSettings = useMapSettingsStore();
const selectStore = useSelectStore();
const uiStore = useUIStore();
const mapLayerStore = useMapLayerStore();

const sides = computed(() => {
  return sortBy(msdl.value?.sides ?? [], "name").filter(
    (side) => side.rootUnits.length > 0 || side.equipment.length > 0,
  );
});

// store event subscription
let contextmenuSub: Subscription;
let clickSub: Subscription;

watchEffect(() => {
  const visibleSides = sides.value.filter((side) => store.layers.has(side.objectHandle));

  const featureCollection = combineSidesToJson(visibleSides, {
    includeUnits: store.showUnits,
    includeEquipment: store.showEquipment,
  });
  const source = props.mlMap.getSource("msdl-sides") as GeoJSONSource;
  if (!source) return;
  source.setData(featureCollection as never);
});

watchEffect(() => {
  const { mlMap } = props;
  mlMap.showCollisionBoxes = mapSettings.showCollisionBoxes;
  mlMap.showPadding = mapSettings.showPadding;
  mlMap.showTileBoundaries = mapSettings.showTileBoundaries;
  mlMap.showOverdrawInspector = mapSettings.showOverdrawInspector;
});

watch(
  () => mapLayerStore.baseLayer,
  (baseLayer) => {
    const { mlMap } = props;
    const newStyle = getStyleForBaseLayer(baseLayer);
    // filter keys that start with 'msdl-' from oldBaseLayer

    mlMap.setStyle(newStyle, {
      diff: false,
      transformStyle: (previousStyle, nextStyle) => {
        if (!previousStyle) return nextStyle;
        const msdlSources = Object.fromEntries(
          Object.entries(previousStyle.sources).filter(([key]) => key.startsWith("msdl-")),
        );
        const msdlLayers = previousStyle.layers.filter((layer) => layer.id.startsWith("msdl-"));

        return {
          glyphs: previousStyle.glyphs,
          sprite: previousStyle.sprite ?? "",
          ...nextStyle,
          sources: { ...nextStyle.sources, ...msdlSources },
          layers: [...nextStyle.layers, ...msdlLayers],
        };
      },
    });
  },
);

function setTextField() {
  const mlMap = props.mlMap;
  if (store.showLabels) {
    mlMap.setLayoutProperty("msdl-sides", "text-field", ["get", "label"]);
  } else {
    mlMap.setLayoutProperty("msdl-sides", "text-field", null);
  }
}

watch(
  () => store.showLabels,
  () => {
    setTextField();
  },
);

watch(
  () => store.showIconAnchors,
  (v) => {
    const mlMap = props.mlMap;
    const hasLayer = !!mlMap.getLayer("msdl-points");
    if (!v) {
      if (hasLayer) mlMap.removeLayer("msdl-points");
    } else {
      if (hasLayer) return;
      mlMap.addLayer({
        id: "msdl-points",
        type: "circle",
        source: "msdl-sides",
        paint: {
          "circle-radius": 5,
          "circle-color": "#3b4fe4",
        },
      });
    }
  },
);

watch([() => store.showSymbolOutline, () => store.symbolSize], () => {
  const mlMap = props.mlMap;
  mlMap
    .listImages()
    .filter(checkIfSymbolCode)
    .forEach((i) => {
      mlMap.removeImage(i);
    });
});

function checkIfSymbolCode(id: string) {
  // chat that id is all uppercase or numbers. '-' and '*' are allowed
  return /^[A-Z0-9\-*]+$/.test(id);
}

function addSidesToMap(map: MlMap) {
  const featureCollection = combineSidesToJson(sides.value, {
    includeUnits: store.showUnits,
    includeEquipment: store.showEquipment,
  });
  map.addSource("msdl-sides", {
    type: "geojson",
    data: featureCollection as never,
  });

  map.on("styleimagemissing", function (e) {
    const symb = new ms.Symbol(e.id, {
      size: store.symbolSize ?? 20,
      outlineWidth: store.showSymbolOutline ? 7 : 0,
    });
    const { width, height } = symb.getSize();
    const data = symb
      .asCanvas(2)
      ?.getContext("2d")
      ?.getImageData(0, 0, 2 * width, 2 * height);
    if (data) {
      map.addImage(e.id, data, { pixelRatio: 2 });
    }
  });

  map.addLayer({
    id: "msdl-sides",
    type: "symbol",
    source: "msdl-sides",
    layout: {
      "icon-image": ["case", ["==", ["get", "sidc"], ""], "10011500002201000000", ["get", "sidc"]],
      "text-font": ["Noto Sans Italic"],
      "text-offset": [0, 1.25],
      "text-anchor": "top",
      "text-size": 12,
      "icon-allow-overlap": true,
      "text-allow-overlap": false,
      "text-optional": true,
    },
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  clickSub = map.on("click", "msdl-sides", (e) => {
    if (!e.features) return;

    if (e.features[0].geometry.type !== "Point") {
      return;
    }

    const activeItemId = e.features[0].properties.id as string;
    if (!activeItemId) return;
    selectStore.activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "msdl-sides", () => {
    if (!uiStore.hoverEnabled) return;
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "msdl-sides", () => {
    if (!uiStore.hoverEnabled) return;
    map.getCanvas().style.cursor = "";
  });

  contextmenuSub = map.on("contextmenu", (ev) => {
    const features = map.queryRenderedFeatures(ev.point, {
      layers: ["msdl-sides"],
    });
    mapEvent.value = {
      x: ev.point.x,
      y: ev.point.y,
      position: [ev.lngLat.lng, ev.lngLat.lat],
      zoomLevel: Math.round(map.getZoom()),
      units: features
        ?.filter((f) => f.properties.type === "unit")
        .map((f) => ({
          id: f.properties.id,
          label: f.properties.label,
          sidc: f.properties.sidc,
        })),
      equipment: features
        ?.filter((f) => f.properties.type === "equipment")
        .map((f) => ({
          id: f.properties.id,
          label: f.properties.label,
          sidc: f.properties.sidc,
        })),
    };
    isOpen.value = true;
    emit("showContextMenu", ev);
    ev.preventDefault();
  });

  setTextField();

  setTimeout(() => {
    try {
      const center = centroid(featureCollection as never);
      map.flyTo({ center: center.geometry.coordinates as [number, number], zoom: 3 });
    } catch {}
  }, 600);
}

addSidesToMap(props.mlMap);

onUnmounted(() => {
  contextmenuSub?.unsubscribe();
  clickSub?.unsubscribe();
});
</script>
<template>
  <MapContextMenu v-model="isOpen" :event="mapEvent" />
</template>
