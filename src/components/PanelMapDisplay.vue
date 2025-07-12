<script setup lang="ts">
import { useLayerStore } from "@/stores/layerStore.ts";
import SwitchLabel from "@/components/SwitchLabel.vue";
import { Slider } from "@/components/ui/slider";
import { RotateCcwIcon } from "lucide-vue-next";
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const layerStore = useLayerStore();

const symbSize = ref([layerStore.symbolSize]);
const resetSymbolSize = (v = 20) => {
  symbSize.value = [v];
  layerStore.symbolSize = v;
};
</script>
<template>
  <div>
    <h4 class="text-sm font-bold mt-2">Map display</h4>
    <div class="grid gap-4 sm:grid-cols-2 grid-cols-1 mt-4">
      <SwitchLabel v-model="layerStore.showUnits">Show units</SwitchLabel>
      <SwitchLabel v-model="layerStore.showEquipment">Show equipment</SwitchLabel>
      <SwitchLabel v-model="layerStore.showLabels">Show labels</SwitchLabel>
      <SwitchLabel v-model="layerStore.showSymbolOutline">Show symbol outline</SwitchLabel>
      <SwitchLabel v-model="layerStore.showAreaOfInterest">Show area of interest</SwitchLabel>
      <div class="flex items-center sm:col-span-2 gap-2 text-sm">
        <span class="flex-none text-sm font-medium">Symbol size</span>
        <Slider
          class="px-2"
          v-model="symbSize"
          :min="10"
          :max="40"
          @valueCommit="layerStore.symbolSize = $event[0]"
        />
        <span class="flex-none w-10">{{ symbSize[0] }} px</span>
        <Button class="flex-none -ml-1" variant="ghost" size="icon" @click="resetSymbolSize()">
          <RotateCcwIcon class="" />
          <span class="sr-only">Reset symbol size</span>
        </Button>
      </div>
    </div>
  </div>
</template>
