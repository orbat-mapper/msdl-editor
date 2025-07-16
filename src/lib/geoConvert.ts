import type { Position } from "geojson";
import { forward } from "mgrs";

export type MGRSPrecision = 1 | 2 | 3 | 4 | 5;
export type CoordinateFormatType = "MGRS" | "DecimalDegrees" | "DegreeMinuteSeconds" | "dms" | "dd";

export function formatDecimalDegrees(p: Position, precision: number) {
  const [lon, lat] = p;
  return `${Math.abs(lat).toFixed(precision)}° ${lat >= 0 ? "N" : "S"} ${Math.abs(lon).toFixed(
    precision,
  )}° ${lon >= 0 ? "E" : "W"}`;
}

export function formatMGRS(p: Position | undefined, precision: MGRSPrecision = 5) {
  if (!p) return "";
  const mgrs: string = p && forward(p as [number, number], precision);
  const n = mgrs.length;
  const eastingI = n - precision * 2;
  return `${mgrs.slice(0, eastingI - 2)} ${mgrs.slice(
    eastingI - 2,
    eastingI,
  )} ${mgrs.slice(eastingI, n - precision)} ${mgrs.slice(n - precision)}`;
}

export function fixExtent(extent: number[] = []) {
  if (!extent || extent.length === 0) return;
  const [minx, miny, maxx, maxy] = extent;
  return [Math.min(minx, maxx), Math.min(miny, maxy), Math.max(minx, maxx), Math.max(miny, maxy)];
}
