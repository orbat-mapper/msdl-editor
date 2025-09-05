<script setup lang="ts">
import { ref, watch } from "vue";
import { useToggle } from "@vueuse/core";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, PencilIcon, XIcon } from "lucide-vue-next";

const props = defineProps<{ field: string }>();
const emit = defineEmits(["update"]);
const [isEditMode, toggleEditMode] = useToggle(false);
const newValue = ref("");

watch(
  () => props.field,
  (value) => {
    newValue.value = value;
  },
  { immediate: true },
);

function onSubmit() {
  emit("update", { newValue: newValue.value });
  newValue.value = props.field;
  toggleEditMode();
}
</script>
<template>
  <div class="flex items-center">
    <template v-if="!isEditMode">
      {{ newValue }}
      <Button @click="toggleEditMode()" type="button" variant="ghost" size="icon" class="ml-2">
        <PencilIcon />
      </Button>
    </template>

    <template v-else>
      <form @submit.prevent="onSubmit" class="flex items-end">
        <div class="rounded border border-transparent font-mono text-base">
          <Input label="Symbol code" v-model="newValue" autofocus />
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
