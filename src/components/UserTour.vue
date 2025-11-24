<script setup lang="ts">
import { eventBus, MSDL_EDITOR_EVENT } from "@/eventBus";
import { useSelectStore } from "@/stores/selectStore";
import { useTourStore } from "@/stores/tourStore";
import { driver, type Config, type Driver, type DriveStep, type State } from "driver.js";
import "driver.js/dist/driver.css";
import { storeToRefs } from "pinia";
import { nextTick, onMounted, onUnmounted, watch } from "vue";

const tourStore = useTourStore();
const { isTourActive, activeIndex } = storeToRefs(tourStore);
const { startTour, resetTour, finishTour } = tourStore;

interface ClickConfig {
  element: string;
  fcn: Function;
  index: number;
}

let currentSelector: string | undefined;
let currentClickHandler: EventListener | undefined;
let currentResumeEvent: string | undefined;

const tourSteps: DriveStep[] = [
  {
    element: "header nav",
    popover: {
      showButtons: ["next", "close"],
      title: "Welcome to the MSDL editor",
      description:
        "This tour will get you started with the application. It provides a step-by-step guide for creating an MSDL scenario.",
      side: "top",
      align: "center",
    },
  },
  {
    element: "#main-dropdown-menu > button",
    popover: {
      showButtons: ["close"],
      title: "Create a new MSDL file",
      description: "Click to open the menu, then select 'File' > 'Create new MSDL...'",
      onPopoverRender: () => {
        // When clicking the menu, pause the tour. Resume when New MSDL is created.
        const clickConfig: ClickConfig = {
          element: "#main-dropdown-menu > button",
          fcn: () => {
            pauseTour("created-new-msdl");
          },
          index: 1,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: "button#create-force-side",
    popover: {
      showButtons: ["close"],
      title: "Create a Force Side",
      description: "First, we need to create a Force Side to add units to. For example, BLUEFOR",
      onPopoverRender: () => {
        // When clicking the button, pause the tour. Resume when New Force Side is created.
        const clickConfig: ClickConfig = {
          element: "button#create-force-side",
          fcn: () => {
            pauseTour("created-force-side");
          },
          index: 2,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: undefined, // render in the center of the screen
    popover: {
      showButtons: ["next", "close"],
      title: "Create a unit",
      description: "Right-click on the map and select 'Create new > Unit'",
      nextBtnText: "OK",
      onNextClick: () => {
        pauseTour("created-unit");
      },
    },
  },
  {
    element: undefined, // render in the center of the screen
    popover: {
      showButtons: ["next", "close"],
      title: "Edit the unit",
      description: "Click the unit on the map or in the ORBAT tree to edit its properties",
      nextBtnText: "OK",
      onNextClick: () => {
        pauseTour("selected-item");
      },
    },
  },
  {
    element: "button#edit-item-details",
    popover: {
      showButtons: ["next", "close"],
      title: "Edit the unit name and symbol",
      description:
        "Click the pencil to open the unit editor to change the name and the symbol of the unit",
      nextBtnText: "OK",
      onNextClick: () => {
        pauseTour("symbol-updated");
      },
    },
  },
  {
    element: "span#unit-model-tab",
    popover: {
      showButtons: ["next", "close"],
      title: "Edit other unit details",
      description: "Browse through the tabs to edit the unit's model, holdings, etc.",
    },
  },
  {
    element: "button#show-all-federates",
    popover: {
      showButtons: ["close"],
      title: "Add a federate to the MSDL scenario",
      description: "Click the 'Show all federates' button.",
      onPopoverRender: (popover, opts) => {
        // When clicking the button, go to next step
        const clickConfig: ClickConfig = {
          element: "button#show-all-federates",
          fcn: opts.driver.moveNext,
          index: 7,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: "#create-deployment > button",
    popover: {
      showButtons: ["close"],
      title: "Add a deployment",
      description: "Click the button to create a deployment",
      onPopoverRender: (popover, opts) => {
        // When clicking the button, go to next step
        const clickConfig: ClickConfig = {
          element: "#create-deployment > button",
          fcn: opts.driver.moveNext,
          index: 8,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: "#create-new-federate > button",
    popover: {
      showButtons: ["close"],
      title: "Add a federate",
      description: "Click the button to add a federate",
      onPopoverRender: () => {
        // When clicking the button, pause the tour. Resume when New Force Side is created.
        const clickConfig: ClickConfig = {
          element: "#create-new-federate > button",
          fcn: () => {
            pauseTour("created-federate");
          },
          index: 9,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: "#federates-overview-area header button",
    popover: {
      showButtons: ["next", "close"],
      title: "Show items assigned to federates",
      description:
        "Click the button to show the number of assigned units and equipment items for each federate.",
    },
  },
  {
    element: "#orbat-sides-container",
    popover: {
      showButtons: ["next", "close"],
      title: "Assign units to federates",
      description:
        "Drag a unit or equipment-item to a federate in the panel on the right, in order to assign it to that federate. Holding the 'SHIFT'-key while dragging also assigns all underlying items",
      nextBtnText: "OK",
      onNextClick: () => {
        pauseTour("assigned-federate");
      },
    },
  },
  {
    element: "#main-dropdown-menu > button",
    popover: {
      showButtons: ["next", "close"],
      title: "Save or load MSDL files",
      description:
        "Open the menu to download the existing MSDL as a file, or to load existing MSDL-files from your machine.",
    },
  },
  {
    element: undefined,
    popover: {
      showButtons: ["close", "next"],
      title: "Finished the tour",
      description:
        "The tour has guided you through the main process of creating an MSDL file. You can always restart the tour by clicking the question mark icon in the top right navigation bar",
    },
  },
];

const tourConfig: Config = {
  showProgress: true,
  steps: tourSteps,
  allowClose: false,
  onCloseClick: () => {
    tourObj.destroy();
    finishTour();
  },
};

const tourObj = driver(tourConfig);

const tourStatusChanged = () => {
  if (isTourActive.value === true) {
    tourObj.drive(activeIndex.value || 0);
  } else {
    removeCurrentClickListener();
    console.log("User tour is not active");
  }
};

const pauseTour = (resumeEvent?: string) => {
  if (resumeEvent) {
    currentResumeEvent = resumeEvent;
  }
  activeIndex.value = tourObj.getActiveIndex() || 0;
  tourObj.destroy();
};

const resumeTour = () => {
  tourObj.drive((activeIndex.value || 0) + 1);
};

const setupClickListener = (cc: ClickConfig) => {
  removeCurrentClickListener();
  const elm = window.document.querySelector(cc.element);
  if (!elm) {
    console.warn(`Cannot find element ${cc.element}`);
    return;
  }
  currentClickHandler = () => processClick(cc);
  currentSelector = cc.element;
  elm.addEventListener("click", currentClickHandler);
  activeIndex.value = tourObj.getActiveIndex() || 0;
};

const removeCurrentClickListener = () => {
  if (!currentSelector || !currentClickHandler) return;
  const elm = document.querySelector<HTMLElement>(currentSelector);
  if (!elm) return;
  elm.removeEventListener("click", currentClickHandler);
  currentClickHandler = undefined;
  currentSelector = undefined;
};

function processClick(c: ClickConfig) {
  if (tourObj.getActiveIndex() === c.index) {
    c.fcn();
  } else {
    console.log(
      `Wanted index ${c.index} is not equal to current ${tourObj.getActiveIndex()} value`,
    );
  }
}

//   const mainMenuBtn = window.document.querySelector("#main-dropdown-menu > button");
//   if (!mainMenuBtn) return;
//   mainMenuBtn.addEventListener("click", processMainMenuBtn);
//   const menuButton = window.document.querySelector(".maplibregl-ctrl-zoom-in");
//   if (!menuButton) return;
//   menuButton.addEventListener("click", () => {
//     if (pausedIndex.value === 1) resumeTour();
//   });
// };

function handleEvent(payload: string) {
  if (currentResumeEvent && currentResumeEvent === payload) {
    nextTick(() => resumeTour());
  }
}

watch(isTourActive, () => {
  tourStatusChanged();
});

onMounted(() => {
  eventBus.on(MSDL_EDITOR_EVENT, handleEvent);
  tourStatusChanged();
});

onUnmounted(() => {
  eventBus.off(MSDL_EDITOR_EVENT, handleEvent);
});
</script>

<template></template>
