import { MilitaryScenario } from "@orbat-mapper/msdllib";
import { combineSidesToJson, saveBlobToLocalFile } from "@/utils.ts";
import ms from "milsymbol";
import type { Root } from "@tmcw/togeojson";
import type { TacticalJson } from "@orbat-mapper/msdllib/dist/lib/common";
import type { FeatureCollection, Point } from "geojson";
import { progress } from "@/composables/progress.ts";

export async function loadMSDLFromFile() {
  const { fileOpen } = await import("browser-fs-access");
  try {
    const file = await fileOpen({ extensions: [".xml"] });
    const text = await file.text();
    progress.start();
    return MilitaryScenario.createFromString(text);
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    progress.done();
  }
}

export type ExportSettings = {
  includeUnits: boolean;
  includeFeatures: boolean;
  embedIcons: boolean;
  useShortName: boolean;
  oneFolderPerSide: boolean;
};

async function createKMLString(scenario: MilitaryScenario, sidcs: string[]) {
  const includeUnits = true;
  const includeEquipment = true;
  const { foldersToKML } = await import("@/extlib/tokml");
  const root: Root = { type: "root", children: [] };

  function createFolder(units: FeatureCollection<Point | null, TacticalJson>, name: string) {
    root.children.push({
      type: "folder",
      meta: { name },
      children: units.features.map((unit) => {
        const { label, sidc } = unit.properties;
        return {
          ...unit,
          properties: {
            name: label,
            styleUrl: `#sidc${sidc}`,
          },
        };
      }),
    });
  }

  if (includeUnits) {
    for (const side of scenario.sides) {
      const units = side.toGeoJson({ includeUnits, includeEquipment });
      createFolder(units, side.name);
    }
  }
  return foldersToKML(root, sidcs);
}

export async function downloadAsKMZ(scenario: MilitaryScenario) {
  const { zipSync } = await import("fflate");
  const data: Record<string, Uint8Array> = {};
  const usedSidcs = new Set<string>();
  // create symbol icons
  for (const unitFeature of combineSidesToJson(scenario.sides).features) {
    const { sidc } = unitFeature.properties;
    if (!sidc) continue;
    const cacheKey = sidc.replaceAll("#", "");
    if (!usedSidcs.has(cacheKey)) {
      const symb = new ms.Symbol(sidc);
      usedSidcs.add(cacheKey);
      const blob: Blob | null = await new Promise((resolve) => symb.asCanvas().toBlob(resolve));
      if (blob) {
        data[`icons/${cacheKey}.png`] = new Uint8Array(await blob.arrayBuffer());
      }
    }
  }

  const kmlString = await createKMLString(scenario, [...usedSidcs]);

  data["doc.kml"] = new TextEncoder().encode(kmlString);

  const zipData = zipSync(data);
  return await saveBlobToLocalFile(
    new Blob([zipData as BlobPart], {
      type: "application/octet-stream",
    }),
    "scenario.kmz",
  );
}

export async function downloadAsMSDL(scenario: MilitaryScenario) {
  const blob = new Blob([scenario.toString()], { type: "text/xml" });
  return await saveBlobToLocalFile(blob, "scenario.xml", { extensions: [".xml"] });
}
