import { defineStore } from "pinia";
import { shallowRef, watch } from "vue";
import { Federate, type EquipmentItem, type ForceSide, type Unit } from "@orbat-mapper/msdllib";

export const UNALLOCATED_FEDERATE: Federate = Federate.fromModel({ name: "Unallocated" });

export const useSelectStore = defineStore("selectStore", () => {
  const activeItem = shallowRef<Unit | EquipmentItem | ForceSide | null>(null);
  function clearActiveItem() {
    activeItem.value = null;
  }
  watch(activeItem, (val) => {
    if (val != null) clearActiveFederate();
  });

  const activeFederate = shallowRef<Federate | null>(null);
  function clearActiveFederate() {
    activeFederate.value = null;
  }
  function openFederatesPanel() {
    activeFederate.value = UNALLOCATED_FEDERATE;
  }
  watch(activeFederate, (val) => {
    if (val != null) clearActiveItem();
  });

  return {
    activeItem,
    clearActiveItem,
    activeFederate,
    clearActiveFederate,
    openFederatesPanel,
    UNALLOCATED_FEDERATE,
  };
});
