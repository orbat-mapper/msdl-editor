import { computed, shallowRef, triggerRef } from "vue";
import type {
  FederateType,
  ForceSideType,
  HoldingType,
  LngLatElevationTuple,
  LngLatTuple,
  MilitaryScenarioInputType,
  ScenarioIdType,
  StandardIdentity,
  UnitEquipmentInterface,
} from "@orbat-mapper/msdllib";
import {
  EquipmentItem,
  EquipmentItemDisposition,
  Federate,
  ForceSide,
  Holding,
  MilitaryScenario,
  ScenarioId,
  Unit,
  UnitDisposition,
} from "@orbat-mapper/msdllib";
import { useLayerStore } from "@/stores/layerStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import { parseFromString, xmlToString } from "@/utils.ts";
import type { Position } from "geojson";
import { useSideStore } from "@/stores/uiStore.ts";
import type {
  EquipmentModel,
  EquipmentModelType,
  UnitModel,
  UnitModelType,
} from "@orbat-mapper/msdllib/dist/lib/modelType";
import { toast } from "vue-sonner";
import { isSideDragItem, type OrbatDragItem } from "@/types/draggables.ts";
import type { Instruction } from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";

export interface MetaEntry<T = string> {
  label: T;
  value: string | number;
}

interface Patch {
  op: "replace" | "remove" | "add";
  path: (string | number)[];
  value?: unknown;
}

interface UndoEntry<T = string> {
  patches: Patch[];
  inversePatches: Patch[];
  meta?: MetaEntry<T>;
}

const msdl = shallowRef<MilitaryScenario>();

const undoStack = shallowRef<UndoEntry[]>([]);
const redoStack = shallowRef<UndoEntry[]>([]);

const canUndo = computed(() => undoStack.value.length > 0);
const canRedo = computed(() => redoStack.value.length > 0);

function applyPatchWrapper(patches: Patch[]) {
  if (!msdl.value) return;
  const data = msdl.value;
  for (const patch of patches) {
    const { op, path, value } = patch;
    const target = data.scenarioId?.element;
    if (!target) continue;

    switch (op) {
      case "replace":
        if (value !== undefined) {
          const newElement = parseFromString(value as string);
          target.replaceWith(newElement);
          data.scenarioId = new ScenarioId(newElement);
          triggerRef(msdl);
        }
        break;
      default:
        console.warn(`Unknown operation: ${op}`);
    }
  }
}

function undo() {
  const past = undoStack.value;
  const future = redoStack.value;
  if (past.length === 0) {
    return;
  }
  const { patches, inversePatches, meta } = past.pop()!;
  applyPatchWrapper(inversePatches);
  future.unshift({ patches, inversePatches, meta });
}

function redo() {
  const future = redoStack.value;
  const past = undoStack.value;
  if (future.length === 0) {
    return;
  }

  const { patches, inversePatches, meta } = future.shift()!;
  applyPatchWrapper(patches);
  past.push({ patches, inversePatches, meta });
}

function updateScenarioId(value: Partial<ScenarioIdType>) {
  if (!msdl.value) return;
  const preSnapshot = xmlToString(msdl.value.scenarioId.element);
  const v = msdl.value.scenarioId;
  Object.entries(value).forEach(([key, value]) => {
    if (key in v) {
      (v as any)[key] = value;
    } else {
      console.warn(`Property ${key} does not exist on ScenarioIdType class.`);
    }
  });
  const postSnapshot = xmlToString(msdl.value.scenarioId.element);
  const inversePatches: Patch[] = [
    {
      op: "replace",
      path: ["scenarioId"],
      value: preSnapshot,
    },
  ];
  const patches: Patch[] = [
    {
      op: "replace",
      path: ["scenarioId"],
      value: postSnapshot,
    },
  ];
  undoStack.value.push({ patches, inversePatches });
  redoStack.value.splice(0);
  triggerRef(msdl);
  // console.log(undoStack.value);
}

function updateForceSide(objectHandle: string, value: Partial<ScenarioIdType>) {
  if (!msdl.value) return;
  const forceSide = msdl.value.getForceSideById(objectHandle);
  if (!forceSide) {
    console.warn(`Force side with object handle ${objectHandle} not found.`);
    return;
  }
  const preSnapshot = xmlToString(forceSide.element);
  Object.entries(value).forEach(([key, value]) => {
    if (key in forceSide) {
      (forceSide as any)[key] = value;
    } else {
      console.warn(`Property ${key} does not exist on ForceSide class.`);
    }
  });
  const postSnapshot = xmlToString(forceSide.element);
  console.warn("Undo/Redo functionality for forceSide is not implemented yet.");

  // const inversePatches: Patch[] = [
  //   {
  //     op: "replace",
  //     path: ["forceSide"],
  //     value: preSnapshot,
  //   },
  // ];
  // const patches: Patch[] = [
  //   {
  //     op: "replace",
  //     path: ["scenarioId"],
  //     value: postSnapshot,
  //   },
  // ];
  // undoStack.value.push({ patches, inversePatches });
  // redoStack.value.splice(0);
  triggerRef(msdl);
}

function updateItemLocation(objectHandle: string, newLocation: Position) {
  if (!msdl.value) return;
  const item = msdl.value.getUnitOrEquipmentById(objectHandle);
  if (!item) {
    console.warn(`Unit/EquipmentItem with object handle ${objectHandle} not found.`);
    return;
  }
  //console.log(item);

  if (item.disposition?.location) {
    //@ts-expect-error
    item.disposition.location = newLocation;
  }

  triggerRef(msdl);
  // console.warn("Not implemented yet: updateItemLocation", newLocation);
}

function updateItemModel(
  objectHandle: string,
  model: UnitModel | UnitModelType | EquipmentModel | EquipmentModelType,
) {
  if (!msdl.value) return;
  const item = msdl.value.getUnitOrEquipmentById(objectHandle);
  if (!item) {
    console.warn(`Unit/EquipmentItem with object handle ${objectHandle} not found.`);
    return;
  }
  item.model = model;
  triggerRef(msdl);
}

function updateHoldings(objectHandle: string, newHoldings: HoldingType[]) {
  if (!msdl.value) return;
  const item = msdl.value.getUnitOrEquipmentById(objectHandle);
  if (!item) {
    console.warn(`Unit/EquipmentItem with object handle ${objectHandle} not found.`);
    return;
  }
  // TODO: implement a smarter merge between existing item.holdings and newHoldings
  const holdingObjects = newHoldings.map((h) => {
    const newHolding = Holding.fromModel(h);
    newHolding.updateFromObject(h);
    return newHolding;
  });

  // TODO: undo/redo functionality
  // const preSnapshot = xmlToString(item.element);
  item.holdings = holdingObjects;
  // const postSnapshot = xmlToString(item.element);
  // const inversePatches: Patch[] = [
  //   {
  //     op: "replace",
  //     path: ["PATH_TO_UNIT"],
  //     value: preSnapshot,
  //   },
  // ];
  // const patches: Patch[] = [
  //   {
  //     op: "replace",
  //     path: ["PATH_TO_UNIT"],
  //     value: postSnapshot,
  //   },
  // ];
  // undoStack.value.push({ patches, inversePatches });
  // redoStack.value.splice(0);
  triggerRef(msdl);
}

function setPrimarySide(objectHandleOrSide: string | ForceSide) {
  if (!msdl.value) return;
  const objectHandle =
    typeof objectHandleOrSide === "string" ? objectHandleOrSide : objectHandleOrSide.objectHandle;
  const forceSide = msdl.value.getForceSideById(objectHandle);
  if (!forceSide) {
    console.warn(`Force side with object handle ${objectHandle} not found.`);
    return;
  }
  msdl.value.primarySide = forceSide;
  const scenarioKey = createScenarioKey(msdl.value);

  triggerRef(msdl);
}

function setSideAffiliation(objectHandleOrSide: string | ForceSide, affiliation: StandardIdentity) {
  if (!msdl.value) return;
  const objectHandle =
    typeof objectHandleOrSide === "string" ? objectHandleOrSide : objectHandleOrSide.objectHandle;
  const forceSide = msdl.value.getForceSideById(objectHandle);
  if (!forceSide) {
    console.warn(`Force side with object handle ${objectHandle} not found.`);
    return;
  }
  forceSide.setAffiliation(affiliation);
  triggerRef(msdl);
}

function addUnit(
  newLocation: LngLatTuple | LngLatElevationTuple,
  newUnit?: Partial<UnitEquipmentInterface>,
) {
  if (!msdl.value) return;
  const item = Unit.create();
  item.disposition = UnitDisposition.fromModel({
    location: newLocation,
  });
  item.name = newUnit?.name ?? "New unit";
  if (msdl.value.primarySide) item.setForceRelation(msdl.value.primarySide);
  msdl.value.addUnit(item);
  triggerRef(msdl);
}

function addEquipmentItem(
  newLocation: LngLatTuple | LngLatElevationTuple,
  newEquipment?: Partial<UnitEquipmentInterface>,
) {
  if (!msdl.value) return;
  const item = EquipmentItem.create();
  item.disposition = EquipmentItemDisposition.fromModel({
    location: newLocation,
  });
  item.name = newEquipment?.name ?? "New equipment item";
  msdl.value.addEquipmentItem(item);
  triggerRef(msdl);
}

function removeUnit(unitHandle: string) {
  if (!msdl.value) return;
  msdl.value.removeUnit(unitHandle);
  triggerRef(msdl);
}

function removeEquipmentItem(equipmentHandle: string) {
  if (!msdl.value) return;
  msdl.value.removeEquipmentItem(equipmentHandle);
  triggerRef(msdl);
}

function addForceSide(newSide?: Partial<ForceSideType>) {
  if (!msdl.value || !newSide) return;
  const side = ForceSide.create();
  side.updateFromObject(newSide);
  msdl.value.addForceSide(side);
  triggerRef(msdl);
  if (useSideStore().hideEmptySides) {
    toast.warning("'Hide empty sides'-setting is set", {
      description: "Newly created Force Side might be hidden",
    });
  }
}

function removeForceSide(objectHandle: string) {
  if (!msdl.value) return;
  msdl.value.removeForceSide(objectHandle);
  triggerRef(msdl);
}

function addFederate(newFederate?: Partial<FederateType>) {
  if (!msdl.value || !newFederate) return;
  const fed = Federate.create();
  fed.updateFromObject(newFederate);
  msdl.value.addFederate(fed);
  triggerRef(msdl);
}

function assignUnitToFederate(unit: string, federate: string) {
  if (!msdl.value || !unit || !federate) return;
  msdl.value.assignUnitToFederate(unit, federate);
  triggerRef(msdl);
}

function assignEquipmentToFederate(equipment: string, federate: string) {
  if (!msdl.value || !equipment || !federate) return;
  msdl.value.assignEquipmentItemToFederate(equipment, federate);
  triggerRef(msdl);
}

function createScenarioKey(scenario: MilitaryScenario): string {
  return scenario.scenarioId.name + scenario.scenarioId.description;
}

function updateOrbatDragItems(
  source: OrbatDragItem,
  target: OrbatDragItem,
  instruction: Instruction,
) {
  if (!msdl.value) return;

  if (isSideDragItem(source)) {
    console.warn("Cannot drag sides yet.");
    return;
  }

  const sourceItem = msdl.value.getItemInstance(source.item.objectHandle);
  const targetItem = msdl.value?.getItemInstance(target.item.objectHandle);
  if (!sourceItem || !targetItem) {
    console.warn("Source or target item not found in the scenario.");
    return;
  }

  if (sourceItem.objectHandle === targetItem.objectHandle) {
    return;
  }

  // check that target is not a child of source
  const { hierarchy } = msdl.value?.getItemHierarchy(targetItem);
  if (hierarchy.map((i) => i.objectHandle).includes(sourceItem.objectHandle)) {
    console.warn("Cannot make a child of an item that is already a child.");
    return;
  }

  if (sourceItem instanceof ForceSide) {
    console.warn("Cannot drag ForceSide items yet.");
    return;
  }

  try {
    msdl.value?.setItemRelation({
      source: sourceItem,
      target: targetItem,
      // @ts-expect-error
      instruction: instruction.type,
    });
  } catch (error) {
    console.error("Failed to update item relation:", error);
    toast.error("Failed to update item relation. Check console for details.");
    return;
  }
  sourceItem.setAffiliation(targetItem.getAffiliation(), { recursive: true });
  triggerRef(msdl);
}

export function useScenarioStore() {
  const layerStore = useLayerStore();
  const selectStore = useSelectStore();
  const sideStore = useSideStore();

  function loadScenario(scenario: MilitaryScenario) {
    selectStore.clearActiveItem();
    const scenarioKey = createScenarioKey(scenario);
    if (scenarioKey in sideStore.primarySideMap) {
      const primarySide = scenario.getForceSideById(sideStore.primarySideMap[scenarioKey]);
      if (!primarySide) {
        console.warn(
          `Primary side with object handle ${sideStore.primarySideMap[scenarioKey]} not found.`,
        );
      } else {
        scenario.primarySide = primarySide;
      }
    }
    msdl.value = scenario;
    layerStore.setSideLayers(scenario);
    undoStack.value = [];
    redoStack.value = [];
  }

  function clearScenario() {
    msdl.value = undefined;
    layerStore.layers.clear();
    selectStore.clearActiveItem();
    undoStack.value = [];
    redoStack.value = [];
  }

  function createScenario(scenarioInput?: MilitaryScenarioInputType) {
    if (!scenarioInput) return;
    clearScenario();
    msdl.value = MilitaryScenario.createFromModel(scenarioInput);
    triggerRef(msdl);
  }

  const isNETN = computed(() => {
    return msdl.value?.isNETN ?? false;
  });

  return {
    createScenario,
    loadScenario,
    clearScenario,
    msdl,
    undo,
    redo,
    canUndo,
    canRedo,
    modifyScenario: {
      updateScenarioId,
      updateForceSide,
      updateItemLocation,
      updateItemModel,
      updateHoldings,
      addUnit,
      addEquipmentItem,
      addForceSide,
      addFederate,
      assignUnitToFederate,
      assignEquipmentToFederate,
      removeUnit,
      removeEquipmentItem,
      setPrimarySide: (side: ForceSide | string) => {
        setPrimarySide(side);
        const scenarioKey = createScenarioKey(msdl.value!);
        const primarySideKey = typeof side === "string" ? side : side.objectHandle;
        sideStore.primarySideMap[scenarioKey] = primarySideKey;
      },
      setSideAffiliation,
      updateOrbatDragItems,
    },
    isNETN,
  };
}
