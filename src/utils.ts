import type { InjectionKey } from "vue";
import { inject } from "vue";
import { EquipmentItem, ForceSide, type MsdlEnumItem, Unit } from "@orbat-mapper/msdllib";
import type { Position } from "geojson";
import type { EnumItem } from "@/components/types.ts";

export function sortBy<T extends object, K extends keyof T>(arr: T[], key: K, ascending = true) {
  return arr.sort((a, b) => {
    if (ascending) {
      return (a[key] || "") > (b[key] || "") ? 1 : -1;
    } else {
      return (a[key] || "") < (b[key] || "") ? 1 : -1;
    }
  });
}

export function isUrl(str: string) {
  try {
    new URL(str);
  } catch (_) {
    return false;
  }

  return true;
}

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }

  return resolved;
}

export function combineSidesToJson(
  sides: ForceSide[],
  { includeUnits = true, includeEquipment = true } = {},
) {
  const unitFeatures = sides
    .map(
      (side) =>
        side.toGeoJson({ includeUnits, includeEquipment: false, includeIdInProperties: true })
          .features,
    )
    .flat()
    .map((feature) => ({
      ...feature,
      properties: { ...feature.properties, type: "unit" },
    }));
  const equipmentFeatures = sides
    .map(
      (side) =>
        side.toGeoJson({ includeUnits: false, includeEquipment, includeIdInProperties: true })
          .features,
    )
    .flat()
    .map((feature) => ({
      ...feature,
      properties: { ...feature.properties, type: "equipment" },
    }));
  return {
    type: "FeatureCollection",
    features: [...unitFeatures, ...equipmentFeatures],
  };
}

export function inputEventFilter(event: Event) {
  return !(
    ["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName) ||
    (event.target as HTMLElement).dataset?.indent // added for FilterTree to avoid intervening with search
  );
}

export async function saveBlobToLocalFile(
  data: Blob | Promise<Blob> | Response,
  fileName: string,
  options: { mimeTypes?: string[]; extensions?: string[] } = {},
) {
  const { fileSave } = await import("browser-fs-access");
  try {
    return await fileSave(data, { fileName, ...options });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return;
    } else {
      throw error;
    }
  }
}

export function formatDecimalDegrees(p?: Position, precision = 4) {
  if (!p) return "";
  const [lon, lat] = p;
  return `${Math.abs(lat).toFixed(precision)}° ${lat >= 0 ? "N" : "S"} ${Math.abs(lon).toFixed(
    precision,
  )}° ${lon >= 0 ? "E" : "W"}`;
}

export function xmlToString(element: Element): string {
  const serializer = new XMLSerializer();
  return serializer.serializeToString(element);
  // Note: The XMLSerializer will in some cases output XML namespaces for every element.
  // It is possible to remove these namespaces with the regex below, but it may not always
  // work if you try to parse the element again and try to add it to an existing XML DOM.
  // return xmlString.replace(/ xmlns="[^"]*"/g, "").replace(/ xmlns:[a-z0-9_-]+="[^"]*"/gi, "");
}

export function parseFromString(xmlString: string): Element {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, "text/xml");

  return doc.documentElement;
}

export function isUnit(item: Unit | EquipmentItem | ForceSide): item is Unit {
  return item instanceof Unit;
}

export function isEquipmentItem(item: Unit | EquipmentItem | ForceSide): item is EquipmentItem {
  return item instanceof EquipmentItem;
}

export function isForceSide(item: Unit | EquipmentItem | ForceSide): item is ForceSide {
  return item instanceof ForceSide;
}

export function isUnitOrEquipment(
  item: Unit | EquipmentItem | ForceSide,
): item is Unit | EquipmentItem {
  return isUnit(item) || isEquipmentItem(item);
}

export function enum2Object(enumItems: MsdlEnumItem[]): Record<string, EnumItem> {
  return Object.fromEntries(
    enumItems.map((item) => [
      item.value,
      {
        ...item,
      },
    ]),
  );
}
