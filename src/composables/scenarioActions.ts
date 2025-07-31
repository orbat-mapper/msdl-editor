import { downloadAsKMZ, downloadAsMSDL, loadMSDLFromFile } from "@/lib/io.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { toast } from "vue-sonner";
import { useDialogStore } from "@/stores/dialogStore.ts";
import { useExpandedStore } from "@/stores/expandedStore.ts";
import { useSelectStore } from "@/stores/selectStore.ts";
import { ForceSide } from "@orbat-mapper/msdllib";
import { nextTick } from "vue";
import { triggerFlash } from "@/utils.ts";
export type ScenarioAction =
  | "CreateNewMSDL"
  | "LoadMSDLFromFile"
  | "DownloadMSDL"
  | "ExportKML"
  | "LoadFromUrl"
  | "EditAssociations"
  | "LocateInOrbat"
  | "CollapseOrbat";

export function useScenarioActions() {
  const { msdl, loadScenario } = useScenarioStore();
  const dialogStore = useDialogStore();
  const expandedStore = useExpandedStore();
  const selectStore = useSelectStore();

  async function dispatchAction(action: ScenarioAction) {
    switch (action) {
      case "CreateNewMSDL":
        dialogStore.isCreateMSDLDialogOpen = true;
        break;
      case "DownloadMSDL":
        if (!msdl.value) {
          return;
        }
        const res = await downloadAsMSDL(msdl.value);
        if (res?.name) {
          toast.success(`Scenario downloaded as "${res.name}" `);
        }
        break;
      case "ExportKML":
        if (!msdl.value) {
          return;
        }
        const kmzRes = await downloadAsKMZ(msdl.value);
        if (kmzRes?.name) {
          toast.success(`Scenario exported as "${kmzRes.name}" `);
        } else if (kmzRes !== undefined) {
          toast.success("Scenario exported as KMZ");
        }
        break;
      case "LoadMSDLFromFile":
        try {
          const scn = await loadMSDLFromFile();
          loadScenario(scn);
          toast.success(`Scenario "${scn.scenarioId.name}" loaded`);
        } catch (e) {
          console.error(e);
        }
        break;
      case "LoadFromUrl":
        dialogStore.isUrlDialogOpen = true;
        break;
      case "EditAssociations":
        dialogStore.isAssociationDialogOpen = true;
        break;
      case "LocateInOrbat":
        if (!msdl.value || !selectStore.activeItem) {
          return;
        }
        const { forceSide, hierarchy } = msdl.value.getItemHierarchy(selectStore.activeItem, {
          includeItem: true,
        });
        const sideToOpen = forceSide[0];
        if (sideToOpen && !expandedStore.openSideItems.includes(sideToOpen.objectHandle)) {
          expandedStore.openSideItems.push(sideToOpen.objectHandle);
        }

        const expanded = new Set(expandedStore.expandedItems.get(sideToOpen.objectHandle) ?? []);
        for (const itemToExpand of hierarchy) {
          if (itemToExpand instanceof ForceSide) {
            continue;
          }
          expanded.add(itemToExpand.objectHandle);
        }
        expandedStore.expandedItems.set(sideToOpen.objectHandle, [...expanded]);
        // add call to nextTick to ensure the DOM is updated before scrolling
        setTimeout(() => {
          const el = document.getElementById(`oi-${selectStore.activeItem?.objectHandle}`);
          if (el) {
            el.scrollIntoView({ behavior: "auto", block: "center" });
            triggerFlash(el);
          } else {
            console.warn(
              `Element with ID oi-${selectStore.activeItem?.objectHandle} not found in the ORBAT.`,
            );
          }
        }, 250);

        break;
      case "CollapseOrbat":
        expandedStore.openSideItems = [];
        expandedStore.expandedItems.clear();
        break;

      default:
        console.error(`Unknown action: ${action}`);
    }
  }

  return { dispatchAction };
}
