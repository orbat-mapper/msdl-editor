import {
  EquipmentItem,
  type MilitaryScenario,
  StandardIdentity,
  Unit,
} from "@orbat-mapper/msdllib";

export function assignMissingSymbols(scn: MilitaryScenario, { logWarnings = true } = {}) {
  let missingEquipmentSymbols = 0;
  let missingUnitSymbols = 0;
  Object.values(scn.unitMap).forEach((unit) => {
    if (!unit.symbolIdentifier) {
      missingUnitSymbols++;
      if (logWarnings)
        console.log(`Assigning missing SIDC to unit ${unit.label} (${unit.objectHandle})`);
      //
      const originalAffiliation = unit.getAffiliation();
      unit.sidc = deriveSymbolIdentifier(unit);
      unit.setAffiliation(originalAffiliation);
    }
  });

  Object.values(scn.equipmentMap).forEach((equipment) => {
    if (!equipment.symbolIdentifier) {
      missingEquipmentSymbols++;
      if (logWarnings)
        console.log(
          `Assigning missing SIDC to equipment ${equipment.label} (${equipment.objectHandle})`,
        );
      const originalAffiliation = equipment.getAffiliation();
      equipment.sidc = deriveSymbolIdentifier(equipment);
      if (originalAffiliation) {
        equipment.setAffiliation(originalAffiliation);
      }
    }
  });

  return { missingEquipmentSymbols, missingUnitSymbols };
}

function deriveSymbolIdentifier(item: Unit | EquipmentItem): string {
  const entityType = item.model?.entityType;
  if (entityType) {
    return deriveSymbolIdentifierFromEntityType(entityType) ?? "";
  }
  if (item instanceof Unit) {
    return "SFGPU-----"; // Default unit SIDC
  } else if (item instanceof EquipmentItem) {
    return "S-GPUUMRSS"; // Default equipment SIDC
  }
  return "";
}

function deriveSymbolIdentifierFromEntityType(entityType: string) {
  const [kind, domain, country, category, subcategory, specific, extra] = entityType
    .split(".")
    .map((s) => +s.trim());
  const step1 = entityTypeMapping[kind];
  if (typeof step1 === "string") {
    return step1;
  }
  return step1[domain] ?? step1[0] ?? "S*P*T-----*****"; // Default to "Other" if not found
}

type EntityTypeTest = Record<number, string | Record<number, string | Record<number, string>>>;

const entityTypeMapping: EntityTypeTest = {
  0: "S****-----*****", // Other
  1: {
    // Platform
    0: "S*P*T-----*****",
    1: "S*P*T-----*****", // Land
    2: "S*P*T-----*****", // Air
    3: "S*P*T-----*****", // Surface
    4: "S*P*T-----*****", // Subsurface
    5: "S*P*T-----*****", // Space
  }, //Platform
  2: "S*P*T-----*****", // Munition
  3: "SFGPEVM---*****", // Life form
  4: "S*P*T-----*****", // Environmental
  5: "S*P*T-----*****", // Cultural feature
  6: "S*P*T-----*****", // Supply
  7: "S*P*T-----*****", // Radio
  8: "S*P*T-----*****", // Expendable
  9: "SFGPES----*****", // Sensor/Emitter
};
