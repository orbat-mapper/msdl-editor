import type { NormalizedNode, NodeRevB } from "@/symbology/types";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

// Create flat list of NormalizedNode elements from the symbology dataset
function normalizeTree(
  raw: any,
  createObject: (obj: NodeRevB) => NormalizedNode,
  isValidNode: (obj: NodeRevB) => boolean,
): NormalizedNode[] {
  if (isValidNode(raw)) {
    return [createObject(raw)];
  }

  if (isArray(raw)) {
    return raw.flatMap((item) => normalizeTree(item, createObject, isValidNode));
  }

  if (isObject(raw)) {
    return Object.values(raw).flatMap((item) => normalizeTree(item, createObject, isValidNode));
  }

  return [];
}

export function useSymbologyDataAdapter() {
  function createObject(obj: NodeRevB): NormalizedNode {
    return {
      ...obj,
      geometry: obj.geometry ?? null,
      text: (obj.names?.filter(Boolean).join(" - ") || obj.name || "").replaceAll("/", " / "),
      category: obj.geometry ? "TACTICAL GRAPHICS" : "WARFIGHTING",
    };
  }

  function isValidNode(obj: NodeRevB): boolean {
    const codingscheme = obj?.codingscheme;
    const functionid = obj?.functionid;

    if (obj.geometry != null && obj.geometry !== "POINT") return false;
    return typeof codingscheme === "string" && typeof functionid === "string";
  }

  function normalizeRevB(app6b: any) {
    return normalizeTree(app6b, createObject, isValidNode);
  }

  return {
    normalizeRevB,
  };
}
