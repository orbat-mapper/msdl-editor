import { ref } from "vue";

const selectedItemIds = ref<Set<string>>(new Set());

function clearSelection() {
  selectedItemIds.value.clear();
}

export function useSelectedItems() {
  return { selectedItemIds: selectedItemIds, clearSelection };
}
