import type { OrbatTreeItem } from "@/components/orbat/types.ts";
import type { Position } from "geojson";
import type { ForceSide } from "@orbat-mapper/msdllib";

export type UnitDragItemSource = "orbatTree" | "breadcrumbs";

const privateUnitDragKey = Symbol("unit");
const privateEquipmentDragKey = Symbol("equipmentItem");
const privatePositionDragKey = Symbol("position");
const privateSideDragKey = Symbol("side");

export type SideDragItem = {
  [privateSideDragKey]: boolean;
  item: ForceSide;
};

export type PositionDropItem = {
  [privatePositionDragKey]: boolean;
  position: Position;
};

export type UnitDragItem = {
  [privateUnitDragKey]: boolean;
  item: OrbatTreeItem;
  source?: UnitDragItemSource;
};

export type EquipmentItemDragItem = {
  [privateEquipmentDragKey]: boolean;
  item: OrbatTreeItem;
};

export function getSideDragItem(data: Omit<SideDragItem, typeof privateSideDragKey>): SideDragItem {
  return {
    [privateSideDragKey]: true,
    ...data,
  };
}

export function isSideDragItem(data: Record<string | symbol, unknown>): data is SideDragItem {
  return Boolean(data[privateSideDragKey]);
}

export function getUnitDragItem(
  data: Omit<UnitDragItem, typeof privateUnitDragKey>,
  source?: UnitDragItemSource,
): UnitDragItem {
  return {
    [privateUnitDragKey]: true,
    ...data,
    source,
  };
}

export function isOrbatItemDragItem(
  data: Record<string | symbol, unknown>,
): data is UnitDragItem | EquipmentItemDragItem {
  return isUnitDragItem(data) || isEquipmentItemDragItem(data);
}

export function isUnitDragItem(data: Record<string | symbol, unknown>): data is UnitDragItem {
  return Boolean(data[privateUnitDragKey]);
}

export function getEquipmentItemDragItem(
  data: Omit<EquipmentItemDragItem, typeof privateEquipmentDragKey>,
): EquipmentItemDragItem {
  return {
    [privateEquipmentDragKey]: true,
    ...data,
  };
}

export function isEquipmentItemDragItem(
  data: Record<string | symbol, unknown>,
): data is EquipmentItemDragItem {
  return Boolean(data[privateEquipmentDragKey]);
}

export function getPositionDropItem(
  data: Omit<PositionDropItem, typeof privatePositionDragKey>,
): PositionDropItem {
  return {
    [privatePositionDragKey]: true,
    ...data,
  };
}

export function isPositionDropItem(
  data: Record<string | symbol, unknown>,
): data is PositionDropItem {
  return Boolean(data[privatePositionDragKey]);
}
