<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { computed, ref } from "vue";
import { ForceSide, type ForceSideType, type ForceSideTypeInput } from "@orbat-mapper/msdllib";
import ForceSideEditForm from "./ForceSideEditForm.vue";

const emit = defineEmits<{ created: [side: Partial<ForceSideType> | undefined] }>();

const open = defineModel<boolean>("open", { required: true });
const sideInput = ref({} as ForceSideTypeInput);
const isError = ref(false);
const errorMessage = ref("");

const forceSide = computed(() => {
  return ForceSide.fromModel(sideInput.value);
});

function cancel() {
  emit("created", undefined);
  open.value = false;
}

function onUpdate(values: Partial<ForceSideTypeInput>) {
  const sideInput: Partial<ForceSideType> = { ...values };
  emit("created", sideInput);
  open.value = false;
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-[425px]">
      <form>
        <DialogHeader>
          <DialogTitle>Create new Force Side</DialogTitle>
          <DialogDescription>Provide the Force Side information</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <ForceSideEditForm :item="forceSide" @cancel="cancel" @update="onUpdate" variant="new" />
        </div>
        <p v-if="isError" class="text-sm text-destructive-foreground">
          {{ errorMessage }}
        </p>
      </form>
    </DialogContent>
  </Dialog>
</template>
