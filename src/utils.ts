import type { InjectionKey } from "vue";
import { inject } from "vue";
import type { ForceSide } from "@orbat-mapper/msdllib";

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
  return {
    type: "FeatureCollection",
    features: sides
      .map(
        (side) =>
          side.toGeoJson({ includeUnits, includeEquipment, includeIdInProperties: true }).features,
      )
      .flat(),
  };
}
