import type { TacticalJson } from "@orbat-mapper/msdllib/dist/lib/common";
import type { Position } from "geojson";

export type MapContextMenuEvent = {
  x: number;
  y: number;
  position: Position;
  zoomLevel?: number;
  units?: TacticalJson[];
  equipment?: TacticalJson[];
};

export type EnumItem<G = string> = {
  value: G;
  label: string;
  description?: string;
};
