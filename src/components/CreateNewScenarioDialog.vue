<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { computed, ref } from "vue";
import ScenarioIdEditForm from "@/components/ScenarioIdEditForm.vue";
import {
  ScenarioId,
  type MilitaryScenarioInputType,
  type ScenarioIdType,
} from "@orbat-mapper/msdllib";

const emit = defineEmits<{ created: [scenario: MilitaryScenarioInputType | undefined] }>();

const open = defineModel<boolean>("open", { required: true });
const scenarioInput = ref({} as ScenarioIdType);
const isError = ref(false);
const errorMessage = ref("");

const scenarioId = computed(() => {
  return ScenarioId.fromModel(scenarioInput.value);
});

function cancel() {
  emit("created", undefined);
  open.value = false;
}

function onUpdate(values: Partial<ScenarioIdType>) {
  const scenInput: MilitaryScenarioInputType = {
    isNETN: true,
    scenarioId: values as ScenarioIdType,
  };
  emit("created", scenInput);
  open.value = false;
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-[425px]">
      <form>
        <DialogHeader>
          <DialogTitle>Create new MSDL scenario</DialogTitle>
          <DialogDescription> Start with filling in the scenario information </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <ScenarioIdEditForm
            :item="scenarioId"
            @cancel="cancel"
            @update="onUpdate"
            variant="new"
          />
        </div>
        <p v-if="isError" class="text-sm text-destructive-foreground">
          {{ errorMessage }}
        </p>
      </form>
    </DialogContent>
  </Dialog>
</template>
