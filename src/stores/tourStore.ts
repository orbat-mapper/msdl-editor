import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTourStore = defineStore("tourStore", () => {
  const doNotShowTourAnymore = useLocalStorage("doNotShowTourAnymore", false);
  const isTourActive = ref(false);
  const activeIndex = ref(0);

  function startTour(startFromIndex: number = 0) {
    if (isTourActive.value === true) {
      console.log("Tour is already active");
      return;
    } else if (doNotShowTourAnymore.value == true) {
      console.log("User does not want to see the tour anymore");
      return;
    } else {
      isTourActive.value = true;
      activeIndex.value = startFromIndex;
      console.log("Set tour to active");
    }
  }

  function finishTour() {
    doNotShowTourAnymore.value = true;
    isTourActive.value = false;
    console.log("Finish tour");
  }

  function resetTour() {
    doNotShowTourAnymore.value = false;
    isTourActive.value = false;
    console.log("Reset tour");
  }

  return { doNotShowTourAnymore, isTourActive, activeIndex, startTour, finishTour, resetTour };
});
