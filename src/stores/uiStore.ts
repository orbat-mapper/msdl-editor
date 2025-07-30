import { defineStore } from "pinia";
import { useLocalStorage, useToggle } from "@vueuse/core";
import { ref } from "vue";

export const useUIStore = defineStore("uiStore", () => {
  const [showLeftPanel, toggleLeftPanel] = useToggle(true);
  const hoverEnabled = ref(true);

  return { showLeftPanel, toggleLeftPanel, hoverEnabled };
});

export const useSideStore = defineStore("sideStore", () => {
  const hideEmptySides = useLocalStorage("hideEmptySides", true);
  const primarySideMap = useLocalStorage<Record<string, string>>("primarySideMap", {});
  const sortAlphabetically = useLocalStorage("sortAlphabetically", false);

  return { hideEmptySides, primarySideMap, sortAlphabetically };
});

export const useWidthStore = defineStore("panelWidth", {
  state: () => ({
    orbatPanelWidth: useLocalStorage("orbatPanelWidth", 400),
    detailsWidth: useLocalStorage("detailsPanelWidth", 400),
  }),
  actions: {
    resetOrbatPanelWidth() {
      this.orbatPanelWidth = 400;
    },

    resetDetailsWidth() {
      this.detailsWidth = 400;
    },
  },
});
