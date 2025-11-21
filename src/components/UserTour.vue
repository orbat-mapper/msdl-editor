<script setup lang="ts">
import { eventBus, MSDL_EDITOR_EVENT } from "@/eventBus";
import { useTourStore } from "@/stores/tourStore";
import { driver, type Config, type Driver, type DriveStep, type State } from "driver.js";
import "driver.js/dist/driver.css";
import { storeToRefs } from "pinia";
import { nextTick, onMounted, onUnmounted, watch } from "vue";

const tourStore = useTourStore();
const { isTourActive, pausedIndex } = storeToRefs(tourStore);
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
      title: "Welcome to the MSDL editor",
      description: "This tour will get you started with creating an MSDL scenario",
      side: "top",
      align: "center",
    },
  },
  {
    element: "#main-dropdown-menu > button",
    popover: {
      showButtons: [],
      title: "Create a new MSDL file",
      description: "Click to open the menu, then select 'File' > 'Create new MSDL...'",
      onPopoverRender: () => {
        // When clicking the menu, pause the tour. Resume when New MSDL is created.
        const clickConfig: ClickConfig = {
          element: "#main-dropdown-menu > button",
          fcn: () => {
            pauseTour("created-new-msdl");
          },
          index: 0,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: "button#create-force-side",
    popover: {
      showButtons: [],
      title: "Create a Force Side",
      description: "For example, BLUEFOR",
      onPopoverRender: () => {
        // When clicking the button, pause the tour. Resume when New Force Side is created.
        const clickConfig: ClickConfig = {
          element: "button#create-force-side",
          fcn: () => {
            pauseTour("created-force-side");
          },
          index: 1,
        };
        setupClickListener(clickConfig);
      },
    },
  },
  {
    element: undefined, // render in the center of the screen
    popover: {
      showButtons: ["next"],
      title: "Create a unit",
      description: "Right-click on the map and select 'Create new > Unit'",
      nextBtnText: 'OK',
      onNextClick: () => {
        pauseTour("created-unit");
      },
    },
  },
];

const tourConfig: Config = {
  showProgress: true,
  steps: tourSteps,
  allowClose: true,
  onCloseClick: () => {
    tourObj.destroy();
    finishTour();
  },
};

const tourObj = driver(tourConfig);

const tourStatusChanged = () => {
  if (isTourActive.value === true) {
    tourObj.drive();
  } else {
    removeCurrentClickListener();
    console.log("User tour is not active");
  }
};

const pauseTour = (resumeEvent?: string) => {
  if (resumeEvent) {
    currentResumeEvent = resumeEvent;
  }
  pausedIndex.value = tourObj.getActiveIndex() || 0;
  tourObj.destroy();
};

const resumeTour = () => {
  tourObj.drive(pausedIndex.value + 1);
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
  if (pausedIndex.value === c.index) c.fcn();
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

const clickListeners: ClickConfig[] = [
  {
    element: "#main-dropdown-menu > button",
    fcn: pauseTour,
    index: 0,
  },
  {
    element: 'div[data-slot="dropdown-menu-item"]:has(> #create-new-msdl)',
    fcn: resumeTour,
    index: 1,
  },
];

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
