import { useScenarioStore } from "@/stores/scenarioStore.ts";
import fuzzysort from "fuzzysort";
import { groupBy, htmlTagEscape } from "@/utils.ts";
import type { ScenarioAction } from "@/composables/scenarioActions.ts";
import { DownloadIcon, Grid3x3Icon, ListTreeIcon, UploadIcon } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

export type UnitSearchResult = {
  label: string;
  sidc: string;
  id: string;
  category: "Units";
  score: number;
  highlight: string;
};

export type EquipmentSearchResult = {
  label: string;
  sidc: string;
  id: string;
  category: "Equipment";
  score: number;
  highlight: string;
};

export type ActionItem = {
  action: ScenarioAction;
  label: string;
  icon?: FunctionalComponent;
  shortcut?: string;
};

export type ActionSearchResult = ActionItem & {
  id: string;
  category: "Actions";
  score: number;
  highlight: string;
};

const actionItems: ActionItem[] = [
  {
    action: "LocateInOrbat",
    label: "Locate active item in ORBAT",
    shortcut: "l",
    icon: ListTreeIcon,
  },
  { action: "CollapseOrbat", label: "Collapse all ORBAT items", icon: ListTreeIcon },
  { action: "CreateNewMSDL", label: "Create new MSDL scenario ..." },
  { action: "LoadMSDLFromFile", label: "Load MSDL scenario from file ...", icon: UploadIcon },
  { action: "DownloadMSDL", label: "Download MSDL", icon: DownloadIcon },
  { action: "ExportKML", label: "Export scenario as KMZ", icon: DownloadIcon },
  { action: "LoadFromUrl", label: "Load scenario from URL ...", icon: UploadIcon },
  { action: "EditAssociations", label: "Show and edit associations ...", icon: Grid3x3Icon },
];

export function useScenarioSearch() {
  const { msdl } = useScenarioStore();
  function searchUnits(query: string): UnitSearchResult[] {
    const q = query.trim();
    if (!q) return [];
    const hits = fuzzysort.go(q, Object.values(msdl.value?.unitMap ?? {}) || [], {
      key: ["label"],
      limit: 100,
    });

    return hits.slice(0, 7).map((u) => {
      return {
        label: u.obj.label,
        sidc: u.obj.sidc,
        id: u.obj.objectHandle,
        category: "Units",
        score: u.score,
        highlight: fuzzysort.highlight({ ...u, target: htmlTagEscape(u.target) }) || "",
      };
    });
  }

  function searchEquipmentItems(query: string): EquipmentSearchResult[] {
    const q = query.trim();
    if (!q) return [];
    const hits = fuzzysort.go(q, Object.values(msdl.value?.equipmentMap ?? {}) || [], {
      key: ["label"],
      limit: 100,
    });

    return hits.slice(0, 5).map((u) => {
      return {
        label: u.obj.label,
        sidc: u.obj.sidc,
        id: u.obj.objectHandle,
        category: "Equipment",
        score: u.score,
        highlight: fuzzysort.highlight({ ...u, target: htmlTagEscape(u.target) }) || "",
      };
    });
  }

  function searchActions(query: string): ActionSearchResult[] {
    const q = query.trim();
    if (!q) return [];
    const hits = fuzzysort.go(q, actionItems, {
      key: ["label"],
    });

    return hits.map((u) => {
      return {
        id: u.obj.action,
        action: u.obj.action,
        label: u.obj.label,
        icon: u.obj.icon,
        category: "Actions",
        score: u.score,
        highlight: fuzzysort.highlight({ ...u, target: htmlTagEscape(u.target) }) || "",
      };
    });
  }

  function search(query: string) {
    const unitHits = searchUnits(query);
    const equipmentHits = searchEquipmentItems(query);
    const actionHits = searchActions(query);
    return groupBy(combineHits([unitHits, equipmentHits, actionHits]), "category");
  }

  return {
    search,
    searchActions,
    actionItems: actionItems.map(
      (a): ActionSearchResult => ({
        ...a,
        id: a.action,
        category: "Actions",
        highlight: "",
        score: 0,
      }),
    ),
  };
}

function combineHits(
  hits: (UnitSearchResult[] | EquipmentSearchResult[] | ActionSearchResult[])[],
) {
  const combinedHits = hits.sort((a, b) => {
    const scoreA = a[0]?.score ?? 1000;
    const scoreB = b[0]?.score ?? 1000;
    return scoreB - scoreA;
  });
  return [...combinedHits.flat()].map((e) => ({
    ...e,
  }));
}
