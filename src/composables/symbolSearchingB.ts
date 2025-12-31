import fuzzysort from "fuzzysort";
import { groupBy, htmlTagEscape } from "@/utils";
import { useSymbologyData } from "@/composables/symbolDataB";
import { type Ref } from "vue";

export interface SymbolSearchResult {
  text: string;
  name: string;
  score: number;
  index: number;
  highlight: string;
  sidc: string;
  category: "WARFIGHTING" | "TACTICAL GRAPHICS";
}

export function useSymbologySearch(sidValue: Ref<string>) {
  const { symbology } = useSymbologyData();

  function searchMainIcons(query: string): SymbolSearchResult[] {
    const h = fuzzysort.go(query, symbology.value || [], {
      key: "text",
      limit: 10,
    });

    return h.map((e, i) => {
      const { obj, ...rest } = e;
      return {
        text: obj.text,
        name: obj.name,
        score: e.score,
        index: i,
        highlight: fuzzysort.highlight({ ...rest, target: htmlTagEscape(rest.target) }) || "",
        sidc:
          obj.codingscheme + sidValue.value + obj.battledimension + "-" + obj.functionid + "-----",
        category: obj.category,
      };
    });
  }

  // Direct search of main symbol icons
  function search(query: string) {
    const mainIconHits = searchMainIcons(query);
    const numberOfHits = mainIconHits.length;
    return { numberOfHits, groups: groupBy(mainIconHits, "category") };
  }

  return { search };
}
