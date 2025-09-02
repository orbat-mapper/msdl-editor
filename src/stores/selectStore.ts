import { defineStore } from "pinia";
import { shallowRef, watch, triggerRef } from "vue";
import { Federate, type EquipmentItem, type ForceSide, type Unit } from "@orbat-mapper/msdllib";
import { isUnitOrEquipment } from "@/utils.ts";

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

  function updateSidc(
    sidc: string,
  ){
    if (!activeItem.value) return;
    if (isUnitOrEquipment(activeItem.value)) {
      activeItem.value.sidc = sidc
      triggerRef(activeItem);
    }
  }

  function updateName(
    name: string,
  ){
    if (!activeItem.value) return;
    if (isUnitOrEquipment(activeItem.value)) {
      activeItem.value.name = name
      triggerRef(activeItem);
    }
  }

  return {
    activeItem,
    updateSidc,
    updateName,
    clearActiveItem,
    activeFederate,
    clearActiveFederate,
    openFederatesPanel,
    UNALLOCATED_FEDERATE,
  };
});
