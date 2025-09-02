<script setup lang="ts">
import { computed, useId} from "vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type NullableSymbolItem } from "@/symbology/types";
import { Label } from "@/components/ui/label";
import MilSymbol from "@/components/MilSymbol.vue";

interface Props {
  label?: string;
  items: NullableSymbolItem[];
  placeholder?: string;
}

const props = defineProps<Props>();
const controlId = useId();

const selectedValue = defineModel<string | null>({ default: "A" });
const selected = computed(() => {
  return (props.items || []).find((i) => i.code === selectedValue.value);
});

</script>
<template>
  <div>
    <Select v-model="selectedValue">
      <Label :for="controlId">{{ label }}</Label>
      <SelectTrigger class="mt-2 w-full" :id="controlId">
        <SelectValue>
          <template v-if="selected" 
            ><MilSymbol
              class="size-8"
              :sidc="selected?.sidc || ''"
              :key="selected?.sidc || ''"
              alt=""
              :size="20"
              :options="{
                outlineWidth: 8,
              }"
            />
            <span class="truncate">{{ selected?.text }}</span>
          </template>
          <template v-else>
            <span>{{ placeholder }}</span>
          </template>
        </SelectValue>
      </SelectTrigger>
      <SelectContent class="border-border">
        <SelectGroup>
          <SelectItem
            v-for="item in items"
            :key="item.code ?? undefined"
            :value="item.code"
            class="data-[state=checked]:font-semibold"
          >
            <MilSymbol
              :size="20"
              class="size-8"
              :sidc="item.sidc"
              :options="{
                outlineWidth: 8,
              }"
            />
            {{ item.text }} {{ item.sidc }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
