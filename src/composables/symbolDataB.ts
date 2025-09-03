import { computed, ref, type Ref, shallowRef, watch } from "vue";
import type { SymbolItem, SymbolValue, NormalizedNode } from "@/symbology/types";
import {
  statusValuesB,
  dimensionValuesB,
  HQTFDummyValuesB,
  echelonValuesB,
  mobilityValuesB,
  towedArrayValuesB,
  installationModifiersB,
} from "@/symbology/valuesB";
import { SidcB } from "@/symbology/sidc";
import { useSymbologyDataAdapter } from "@/composables/symbolDatasetAdapter";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import {
  SymbologyStandard,
} from "@orbat-mapper/msdllib/dist/lib/enums";

const symbology = shallowRef<NormalizedNode[] | undefined>();
const isLoaded = ref(false);
const currentSymbologyStandard = ref<SymbologyStandard | undefined>();

// Load Symbology Data from files
export function useSymbologyData() {

  const { msdl } = useScenarioStore();
  const symbologyStandard = computed(() => msdl.value?.msdlOptions.standardName);
  const { normalizeRevB } = useSymbologyDataAdapter();

  async function loadData() {
    isLoaded.value = false;

    if (symbologyStandard.value === "NATO_APP") {

      const { app6b } = await import("../symbology/standards/app6b");
      symbology.value = normalizeRevB(app6b);
      currentSymbologyStandard.value = "NATO_APP";

    } else if ( symbologyStandard.value === "MILSTD_2525B" ) {

      const { ms2525b } = await import("../symbology/standards/milstd2525b");
      symbology.value = normalizeRevB(ms2525b);
      currentSymbologyStandard.value = "MILSTD_2525B";
      
    } else {
      throw new Error('Symbology Standard not recognized');
    }
    isLoaded.value = true;
  }

  return {
    isLoaded,
    symbology,
    loadData,
  };
}

// Composable for creating maps of items for symbol dropdowns, and accessing the individual sidc components
export function useSymbolItems(sidc: Ref<string>) {
  
  // Use symbol reactivity
  const {
    affiliationValue,
    csidc,
    codingSchemeValue,
    battleDimensionValue,
    statusValue,
    functionIdValue,
    contextValue,
    modifier1Value,
    modifier2Value,
    echelonValue,
  } = useSymbolValues(sidc);

  // Use symbology data from dataset
  const {
    symbology,
    isLoaded,
    loadData,
  } = useSymbologyData();

  const battleDimensionItems = computed((): SymbolItem[] => {
    if (!symbology.value) return [];
    return dimensionValuesB.map(({ code, text }) => {
      return {
        code,
        text,
        sidc: code[0] + affiliationValue.value + code.slice(2,11) + '----',
      }
    });
  });

  const statusItems = computed((): SymbolItem[] => {
    if (!symbology.value) return [];
    let modifier = isGroundInstallation() ? 'H' : '-'

    return statusValuesB.map(({ code, text }) => {
      return {
      code,
      text,
      sidc: codingSchemeValue.value + affiliationValue.value + battleDimensionValue.value + code + functionIdValue.value + modifier + '----',
    }});
  });

  const echelonItems = computed((): SymbolItem[] => {
    let values: SymbolValue[];
    if (!symbology.value) return [];

    if (isGroundUnit()){
      values = echelonValuesB;
    } else if (isGroundEquipment()){
      values = mobilityValuesB;
    } else if (isGroundInstallation()) {
      values = installationModifiersB;
    } else if (isSeaSurface() || isSeaSubsurface()) {
      values = towedArrayValuesB;
    } else {
      values = [{ code: "-", text: "Unspecified" }];
    } 

    return values.map(({ code, text }) => ({
      code,
      text,
      sidc: codingSchemeValue.value + affiliationValue.value + battleDimensionValue.value + statusValue.value + functionIdValue.value + modifier1Value.value + code + '---',
    }));
  });

  const hqtfdItems = computed((): SymbolItem[] => {
    let values: SymbolValue[];
    if (!symbology.value) return [];
    
    if (
      isGroundEquipment() || 
      isGroundInstallation() ||
      isSeaSurface() || 
      isSeaSubsurface() ||
      isGraphics()
    ) {
      values = [{ code: modifier1Value.value, text: "Not applicable" }];
    } else {
      values = HQTFDummyValuesB
    }

    return values.map(({ code, text }) => {
      return {
        code,
        text,
        sidc: codingSchemeValue.value + affiliationValue.value + battleDimensionValue.value + statusValue.value + functionIdValue.value + code + modifier2Value.value +'---',
    }});
  });

  const mainIconItems = computed(() => {
    if (!isLoaded.value) return [];
    if (!symbology.value) return [];

    let mis = (symbology.value || {})
    const addedNodes = new Set();
    const result: SymbolItem[] = [];

    for (const node of mis){

      if (!(node.battledimension === battleDimensionValue.value)) continue
      if (!(node.codingscheme === codingSchemeValue.value)) continue

      // Filter based on Ground unit logic
      if (isGroundUnit() && node.functionid[0] !== "U") continue
      if (isGroundEquipment() && node.functionid[0] !== "E") continue
      if (isGroundInstallation() && node.functionid[0] !== "I") continue
      
      // Filter doublicate keys
      if (addedNodes.has(node.functionid)) continue;
      addedNodes.add(node.functionid);

      let names = node.names?.filter(Boolean)

      const [entity, entityType, entitySubtype] = names.length >= 3
        ? [names[names.length -3], names[names.length -2], names[names.length -1]]
        : [names[names.length -2], names[names.length -1], null];
      
      let text = entity;
      if (entityType) text += " - " + entityType;
      if (entitySubtype) text += " - " + entitySubtype;

      // There seems to be a bug with this number GFCAOXAH-------
      if (codingSchemeValue.value + '*' + battleDimensionValue.value + '*' + node.functionid + modifier1Value.value + modifier2Value.value + "---" == "G*C*OXAH-------") continue

      result.push({
        code: node.functionid,
        sidc: codingSchemeValue.value + affiliationValue.value + battleDimensionValue.value + statusValue.value + node.functionid + modifier1Value.value + modifier2Value.value + "---",
        text: text,
        entity: entity,
        entityType: entityType,
        entitySubtype: entitySubtype,
      })
    }

    return result;
  });

  function isGroundUnit() {
    if (battleDimensionValue.value == 'G' && (functionIdValue.value[0] == 'U' || functionIdValue.value[0] == '-')){
      return true
    }
    return false
  }

  function isGroundEquipment() {
    if (battleDimensionValue.value == 'G' && functionIdValue.value[0] == 'E') {
      return true
    }
    return false
  }

  function isGroundInstallation() {
    if (battleDimensionValue.value == 'G' && functionIdValue.value[0] == 'I') {
      return true
    }
    return false
  }

  function isSeaSurface() {
    if (battleDimensionValue.value == 'S') {
      return true
    }
    return false
  }

  function isSeaSubsurface() {
    if (battleDimensionValue.value == 'U') {
      return true
    }
    return false
  }

  function isGraphics() {
    if (codingSchemeValue.value == "G") {
      return true
    }
    return false
  }

  return {
    affiliationValue,
    codingSchemeValue,
    battleDimensionValue,
    statusValue,
    functionIdValue,
    contextValue,
    modifier1Value,
    modifier2Value,
    echelonValue,
    battleDimensionItems,
    statusItems,
    hqtfdItems,
    echelonItems,
    mainIconItems,
    csidc,
    isLoaded,
    loadData,
    isGroundUnit,
    isGroundEquipment,
    isGroundInstallation,
    isSeaSurface,
    isSeaSubsurface
  };
}

// Add reactivity to the individual components of the sidc number
function useSymbolValues(sidc: Ref<string>) {

  // Load sidc as object
  const sidcObj = new SidcB(sidc.value);

  // Create refs of values
  const codingSchemeValue = ref(sidcObj.codingScheme);
  const affiliationValue = ref(sidcObj.affiliation);
  const battleDimensionValue = ref(sidcObj.battleDimension);
  const statusValue = ref(sidcObj.status);
  const functionIdValue = ref(sidcObj.functionId);
  const contextValue = ref(sidcObj.context);
  const modifier1Value = ref(sidcObj.modifier1);
  const modifier2Value = ref(sidcObj.modifier2);
  const echelonValue = ref(sidcObj.echelon);

  function setValues(value: string) {
    const sidcObj = new SidcB(value);
    codingSchemeValue.value = sidcObj.codingScheme;
    affiliationValue.value = sidcObj.affiliation;
    battleDimensionValue.value = sidcObj.battleDimension;
    statusValue.value = sidcObj.status;
    functionIdValue.value = sidcObj.functionId
    modifier1Value.value = sidcObj.modifier1;
    modifier2Value.value = sidcObj.modifier2;
    echelonValue.value = sidcObj.echelon;
    contextValue.value = sidcObj.context;
  }

  watch(sidc, (value) => {
    setValues(value);
  });

  const csidc = computed({
    get() {
      return (
        codingSchemeValue.value +
        affiliationValue.value +
        battleDimensionValue.value +
        statusValue.value +
        functionIdValue.value +
        modifier1Value.value +
        modifier2Value.value +
        echelonValue.value +
        contextValue.value +
        '-'
      );
    },
    set(newValue: string) {
      setValues(newValue);
    },
  });

  return {
    codingSchemeValue,
    affiliationValue,
    battleDimensionValue,
    statusValue,
    functionIdValue,
    modifier1Value,
    modifier2Value,
    echelonValue,
    contextValue,
    csidc,
    setValues
  };
}
