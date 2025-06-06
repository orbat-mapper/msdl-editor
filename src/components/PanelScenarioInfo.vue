<script setup lang="ts">
import { useScenarioStore } from "@/stores/scanarioStore.ts";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/dialogStore.ts";
import PanelDataGrid from "@/components/PanelDataGrid.vue";
import { Badge } from "@/components/ui/badge";

const { msdl } = useScenarioStore();
const dialogStore = useDialogStore();
</script>
<template>
  <div v-if="msdl">
    <div class="flex items-center justify-between">
      <h4 class="text-sm font-bold mt-2">Scenario info</h4>
      <Badge v-if="msdl.isNETN">NETN</Badge>
    </div>

    <PanelDataGrid class="mt-4 text-wrap overflow-auto">
      <span class="font-semibold">Name</span>
      <span>{{ msdl.scenarioId.name }}</span>
      <span class="font-semibold">Description</span>
      <span class="break-all">{{ msdl.scenarioId.description }}</span>
      <span class="font-semibold">Security classification</span>
      <span>{{ msdl.scenarioId.securityClassification }}</span>
      <span class="font-semibold">Modification date</span>
      <span>{{ msdl.scenarioId.modificationDate || "-" }}</span>
      <span class="font-semibold">Type</span>
      <span>{{ msdl.scenarioId.type || "-" }}</span>
      <span class="font-semibold">Version</span>
      <span>{{ msdl.scenarioId.version || "-" }}</span>
    </PanelDataGrid>

    <Button variant="outline" class="mt-2" @click="dialogStore.toggleAssociationDialog()"
      >Show associations</Button
    >
  </div>
</template>
