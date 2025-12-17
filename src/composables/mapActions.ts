import maplibregl, { type LngLatBoundsLike, type LngLatLike } from "maplibre-gl";
import bbox from "@turf/bbox";
import type { GeoJSON } from "geojson";
import type { PhotonSearchResult } from "@/composables/geosearching.ts";
import { fixExtent } from "@/lib/geoConvert.ts";
import { type EquipmentItem, ForceSide, type Unit } from "@orbat-mapper/msdllib";
import { isForceSide, isUnitOrEquipment } from "@/utils.ts";

export function flyToItem(
  item: EquipmentItem | Unit | ForceSide,
  mlMap: maplibregl.Map,
  { zoom = 16 }: { zoom?: number } = {},
) {
  if (isUnitOrEquipment(item)) {
    const coordinates = item.location as LngLatLike;
    if (!coordinates) return;
    mlMap?.flyTo({ center: coordinates, zoom });
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

export function flyToPlace(item: PhotonSearchResult, mlMap: maplibregl.Map) {
  const extent = fixExtent(item.properties.extent);
  if (extent) {
    mlMap?.fitBounds(extent as LngLatBoundsLike, {
      maxZoom: 15,
      duration: 1500,
    });
  } else {
    mlMap?.flyTo({
      center: item.geometry.coordinates as LngLatLike,
      zoom: 15,
      duration: 1500,
    });
  }
}
