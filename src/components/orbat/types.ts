import type { EquipmentItem, Unit } from "@orbat-mapper/msdllib";

export type OrbatTreeItem = {
  label: string;
  sidc: string;
  objectHandle: string;
  itemType: "unit" | "equipment";
  children?: string[];
  subordinates?: Unit[];
  equipment?: EquipmentItem[];
};
