<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { MsdlEnumItem } from "@orbat-mapper/msdllib";

const { values } = defineProps<{
  values: MsdlEnumItem[];
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <Select v-model="modelValue" class="w-full">
    <SelectTrigger>
      <SelectValue placeholder="" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Values</SelectLabel>
        <SelectItem v-for="{ value, label } in values" :key="value" :value>{{ label }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
