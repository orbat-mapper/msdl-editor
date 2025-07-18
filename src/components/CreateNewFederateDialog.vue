<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { computed, ref } from "vue";
import { Federate, type FederateType, type FederateTypeInput } from "@orbat-mapper/msdllib";
import FederateEditForm from "./FederateEditForm.vue";

const emit = defineEmits<{ created: [federate: Partial<FederateType> | undefined] }>();

const open = defineModel<boolean>("open", { required: true });
const federateInput = ref({} as FederateTypeInput);
const isError = ref(false);
const errorMessage = ref("");

const federate = computed(() => {
  return Federate.fromModel(federateInput.value);
});

function cancel() {
  emit("created", undefined);
  open.value = false;
}

function onUpdate(values: Partial<FederateTypeInput>) {
  const federateInput: Partial<FederateType> = { ...values };
  emit("created", federateInput);
  open.value = false;
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create new Federate</DialogTitle>
        <DialogDescription>Provide the Federate name</DialogDescription>
      </DialogHeader>
      <FederateEditForm
        :item="federate"
        @cancel="cancel"
        @update="onUpdate"
        variant="new"
        class="mt-0"
      />
      <p v-if="isError" class="text-sm text-destructive-foreground">
        {{ errorMessage }}
      </p>
    </DialogContent>
  </Dialog>
</template>
