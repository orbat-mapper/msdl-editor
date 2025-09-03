<script setup lang="ts">
import { ref, watch } from "vue";
import { useClipboard, useToggle } from "@vueuse/core";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, PencilIcon, XIcon, CopyIcon } from "lucide-vue-next";

const props = defineProps<{ sidc: string; activePart?: string }>();
const emit = defineEmits(["update"]);

const { copy: copyToClipboard } = useClipboard();

const [isEditMode, toggleEditMode] = useToggle(false);
const newSidc = ref("");

watch(
  () => props.sidc,
  (value) => {
    newSidc.value = value;
  },
  { immediate: true },
);

function onSubmit() {
  emit("update", { sidc: newSidc.value });
  newSidc.value = props.sidc;
  toggleEditMode();
}

async function onCopy() {
  await copyToClipboard(props.sidc);
}
</script>
<template>
  <div class="flex items-center">
    <template v-if="!isEditMode">
      <div class="rounded border border-transparent font-mono text-base">
        <Input type="text" v-model="newSidc" disabled />
      </div>
      <Button @click="toggleEditMode()" class="ml-2">
        <PencilIcon />
      </Button>
      <Button @click="onCopy()" class="ml-2">
        <CopyIcon />
      </Button>
    </template>

    <template v-else>
      <form @submit.prevent="onSubmit" class="flex items-end">
        <div class="rounded border border-transparent font-mono text-base">
          <Input label="Symbol code" v-model="newSidc" autofocus />
        </div>

        <Button type="submit" class="ml-2">
          <CheckIcon />
        </Button>
        <Button type="submit" @click="toggleEditMode()" class="ml-2">
          <XIcon />
        </Button>
      </form>
    </template>
  </div>
</template>
