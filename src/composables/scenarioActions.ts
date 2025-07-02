import { downloadAsKMZ, downloadAsMSDL, loadMSDLFromFile } from "@/lib/io.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { toast } from "vue-sonner";
import { useDialogStore } from "@/stores/dialogStore.ts";
export type ScenarioAction =
  | "CreateNewMSDL"
  | "LoadMSDLFromFile"
  | "DownloadMSDL"
  | "ExportKML"
  | "LoadFromUrl"
  | "EditAssociations";

export function useScenarioActions() {
  const { msdl, loadScenario } = useScenarioStore();
  const dialogStore = useDialogStore();

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
      default:
        console.error(`Unknown action: ${action}`);
    }
  }

  return { dispatchAction };
}
