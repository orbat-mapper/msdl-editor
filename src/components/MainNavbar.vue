<script setup lang="ts">
import MainDropdownMenu from "@/components/MainDropdownMenu.vue";
import { MoonIcon, SunIcon, SearchIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { useDark, useToggle } from "@vueuse/core";
import { loadMSDLFromFile } from "@/lib/io.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import EditableLabel from "@/components/EditableLabel.vue";
import { computed } from "vue";
import { ref } from "vue";
import CommandPalette from "@/components/CommandPalette.vue";

const {
  msdl,
  loadScenario,
  modifyScenario: { updateScenarioId },
} = useScenarioStore();

const isDark = useDark();
const toggleDark = useToggle(isDark);
const showSearch = ref(false);

async function doLoading() {
  try {
    const scn = await loadMSDLFromFile();
    loadScenario(scn);
  } catch (e) {
    console.error(e);
  }
}

const scenarioName = computed({
  get: () => msdl.value?.scenarioId.name || "No title",
  set: (value) => {
    if (msdl.value) {
      updateScenarioId({ name: value });
    }
  },
});
</script>
<template>
  <nav class="flex items-center justify-between p-1 border-b">
    <div class="pl-2 flex items-center gap-2">
      <MainDropdownMenu />
      <div v-if="msdl">
        <EditableLabel v-model="scenarioName" />
      </div>
      <Button v-else variant="outline" @click="doLoading">Load scenario</Button>
    </div>

    <div class="flex gap-2">
      <Button variant="outline" @click="showSearch = true" size="icon"><SearchIcon /></Button>
      <CommandPalette v-model:open="showSearch" />
      <Button variant="outline" @click="toggleDark()" size="icon">
        <MoonIcon v-if="isDark" class="size-4" />
        <SunIcon v-else class="size-4" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </nav>
</template>
