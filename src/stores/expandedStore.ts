import { defineStore } from "pinia";
import { ref } from "vue";

// This store is used to manage the currently expanded items in the ORBAT, which can be a Unit, EquipmentItem, or ForceSide.
export const useExpandedStore = defineStore("expandedStore", () => {
  const expandedItems = ref<Map<string, string[]>>(new Map());
  const openSideItems = ref<string[]>([]);
  return { expandedItems, openSideItems };
});
