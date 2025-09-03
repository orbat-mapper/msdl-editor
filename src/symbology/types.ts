export interface SymbolValue {
  code: string;
  text: string;
}

export interface SymbolItem extends SymbolValue {
  sidc: string;
  entity?: string;
  entityType?: string;
  entitySubtype?: string | null;
}

export interface NullableSymbolItem extends Omit<SymbolItem, "code"> {
  code: string | null;
}

export interface NormalizedNode {
  hierarchy: string;
  names: string[];
  codingscheme: string;
  affiliation: string;
  battledimension: string;
  status: string;
  functionid: string;
  name: string;
  remarks: string;
  geometry: string | null;
  text: string;
  category: "WARFIGHTING" | "TACTICAL GRAPHICS";
}

export interface NodeRevB {
  geometry?: string;
  text: string;
  names: string[];
  name: string;
  hierarchy: string;
  codingscheme: string;
  affiliation: string;
  battledimension: string;
  status: string;
  functionid: string;
  remarks: string;
}
