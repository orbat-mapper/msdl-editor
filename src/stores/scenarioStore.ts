import { computed, shallowRef, triggerRef } from "vue";
import type {
  AssociationType,
  DispositionType,
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
  Association,
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
import type { MsdlOptionsType } from "@orbat-mapper/msdllib/dist/lib/msdlOptions";
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
import { type OrbatDragItem } from "@/types/draggables.ts";
import type { Instruction } from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { eventBus, MSDL_EDITOR_EVENT } from "@/eventBus";

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
}

function updateOptions(value: Partial<MsdlOptionsType>) {
  if (!msdl.value) return;
  const preSnapshot = xmlToString(msdl.value.msdlOptions.element);
  const v = msdl.value.msdlOptions;
  Object.entries(value).forEach(([key, value]) => {
    if (key in v) {
      (v as any)[key] = value;
    } else {
      console.warn(`Property ${key} does not exist on MsdlOptionsType class.`);
    }
  });
  const postSnapshot = xmlToString(msdl.value.msdlOptions.element);
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
}

function updateFederate(objectHandle: string, value: Partial<FederateType>) {
  if (!msdl.value) return;
  const federate = msdl.value.getFederateById(objectHandle);
  if (!federate) {
    console.warn(`Federate with object handle ${objectHandle} not found.`);
    return;
  }
  federate.updateFromObject(value);
  triggerRef(msdl);
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

function updateItemDisposition(objectHandle: string, disposition: DispositionType) {
  if (!msdl.value) return;
  const item = msdl.value.getUnitOrEquipmentById(objectHandle);
  if (!item) {
    console.warn(`Unit/EquipmentItem with object handle ${objectHandle} not found.`);
    return;
  }
  if (disposition) {
    item.disposition = disposition;
  }
  triggerRef(msdl);
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

function updateSymbolIdentifier(objectHandle: string, sidc: string) {
  if (!msdl.value) return;
  const item = msdl.value.getUnitOrEquipmentById(objectHandle);
  if (!item) {
    console.warn(`Unit/EquipmentItem with object handle ${objectHandle} not found.`);
    return;
  }
  item.symbolIdentifier = sidc;
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
  item.sidc = "SFGPU----------";
  item.symbolIdentifier = item.sidc;
  if (msdl.value.primarySide) item.setForceRelation(msdl.value.primarySide);
  msdl.value.addUnit(item);
  triggerRef(msdl);
  eventBus.emit(MSDL_EDITOR_EVENT, "created-unit");
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
  item.sidc = "SFGPE-----M----";
  item.symbolIdentifier = item.sidc;
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
  eventBus.emit(MSDL_EDITOR_EVENT, "created-force-side");
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

function assignUnitToFederate(
  unit: string,
  federate: string,
  includeSubordinates: boolean = false,
) {
  if (!msdl.value || !unit || !federate) return;
  msdl.value.assignUnitToFederate(unit, federate, includeSubordinates);
  triggerRef(msdl);
}

function assignEquipmentToFederate(equipment: string, federate: string) {
  if (!msdl.value || !equipment || !federate) return;
  msdl.value.assignEquipmentItemToFederate(equipment, federate);
  triggerRef(msdl);
}

function removeUnitFromFederate(unit: string, includeSubordinates: boolean = false) {
  if (!msdl.value || !unit) return;
  const federate = msdl.value.getFederateOfUnit(unit);
  if (!federate) return;
  msdl.value.removeUnitFromFederate(unit, federate.objectHandle, includeSubordinates);
  triggerRef(msdl);
}

function removeEquipmentFromFederate(equipment: string) {
  if (!msdl.value || !equipment) return;
  const federate = msdl.value.getFederateOfEquipment(equipment);
  if (!federate) return;
  msdl.value.removeEquipmentFromFederate(equipment, federate.objectHandle);
  triggerRef(msdl);
}

function createScenarioKey(scenario: MilitaryScenario): string {
  return scenario.scenarioId.name + scenario.scenarioId.description;
}

function createDeployment() {
  if (!msdl.value) return;
  msdl.value.createDeployment();
  triggerRef(msdl);
}

function updateOrbatDragItems(
  source: OrbatDragItem,
  target: OrbatDragItem,
  instruction: Instruction,
) {
  if (!msdl.value) return;

  const sourceItem = msdl.value.getItemInstance(source.item.objectHandle);
  const targetItem = msdl.value?.getItemInstance(target.item.objectHandle);
  if (!sourceItem || !targetItem) {
    console.warn("Source or target item not found in the scenario.");
    return;
  }

  if (sourceItem.objectHandle === targetItem.objectHandle) {
    return;
  }

  try {
    msdl.value?.setItemRelation({
      source: sourceItem,
      target: targetItem,
      // @ts-expect-error xxx
      instruction: instruction.type,
    });
  } catch (error) {
    console.error("Failed to update item relation:", error);
    toast.error("Failed to update item relation. Check console for details.");
    return;
  }
  if (sourceItem instanceof Unit || sourceItem instanceof EquipmentItem)
    sourceItem.setAffiliation(targetItem.getAffiliation(), { recursive: true });
  triggerRef(msdl);
}

function updateForceSideAssociation(
  objectHandleOrForceSide: string | ForceSide,
  associations: (Association | AssociationType)[],
) {
  if (!msdl.value) return;
  const forceSide = msdl.value.getItemInstance(objectHandleOrForceSide);
  if (!forceSide || !(forceSide instanceof ForceSide)) {
    console.warn(`Force side with object handle ${objectHandleOrForceSide} not found.`);
    return;
  }
  forceSide.associations = associations;
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
    eventBus.emit(MSDL_EDITOR_EVENT, "created-new-msdl");
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
      updateOptions,
      updateFederate,
      updateForceSide,
      updateItemLocation,
      updateItemDisposition,
      updateItemModel,
      updateSymbolIdentifier,
      updateHoldings,
      addUnit,
      addEquipmentItem,
      addForceSide,
      addFederate,
      assignUnitToFederate,
      assignEquipmentToFederate,
      removeUnitFromFederate,
      removeEquipmentFromFederate,
      removeUnit,
      removeEquipmentItem,
      createDeployment,
      setPrimarySide: (side: ForceSide | string) => {
        setPrimarySide(side);
        const scenarioKey = createScenarioKey(msdl.value!);
        const primarySideKey = typeof side === "string" ? side : side.objectHandle;
        sideStore.primarySideMap[scenarioKey] = primarySideKey;
      },
      setSideAffiliation,
      updateOrbatDragItems,
      updateForceSideAssociation,
    },
    isNETN,
  };
}
