<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import FormFooter from "@/components/FormFooter.vue";
import type { MsdlOptionsType, MsdlOptions } from "@orbat-mapper/msdllib/dist/lib/msdlOptions";
import {
  EnumEchelon,
  SymbologyStandard,
  CoordinateSystem,
} from "@orbat-mapper/msdllib/dist/lib/enums";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type FormVariant = "new" | "edit";

const props = withDefaults(defineProps<{ item: MsdlOptions; variant?: FormVariant }>(), {
  variant: "edit",
});
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "update", value: Partial<MsdlOptionsType>): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    msdlVersion: z.string().min(1, "MSDLVersion is required"),
    aggregateBased: z.string(),
    aggregateEchelon: z.string(),
    standardName: z.string(),
    majorVersion: z.string(),
    minorVersion: z.string(),
    coordinateSystemType: z.string(),
    coordinateSystemDatum: z.string(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    msdlVersion: props.item.msdlVersion || "",
    aggregateBased: props.item.aggregateBased || "",
    aggregateEchelon: props.item.aggregateEchelon || "",
    standardName: props.item.standardName || "",
    majorVersion: props.item.majorVersion || "",
    minorVersion: props.item.minorVersion || "",
    coordinateSystemType: props.item.coordinateSystemType || "",
    coordinateSystemDatum: props.item.coordinateSystemDatum || "",
  },
});

const onSubmit = form.handleSubmit((values) => {
  emit("update", values);
});

// Dropdown options obtained from the msdllib package
const echelonOptions = Object.entries(EnumEchelon).map(([key, value]) => ({
  label: key,
  value: value,
}));

const standardNameOptions = Object.entries(SymbologyStandard).map(([key, value]) => ({
  label: key,
  value: value,
}));

const coordinateSystemTypeOptions = Object.entries(CoordinateSystem).map(([key, value]) => ({
  label: key,
  value: value,
}));
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-6 mt-6">
      <FormField
        v-slot="{ componentField }"
        name="msdlVersion"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>MSDLVersion</FormLabel>
          <FormControl>
            <Input type="text" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="aggregateBased"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>AggregateBased</FormLabel>
          <FormControl>
            <Input type="text" placeholder="n/a" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="aggregateEchelon"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>AggregateEchelon</FormLabel>
          <div class="flex">
            <Select v-bind="componentField">
              <FormControl class="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="n/a" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="option in echelonOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="outline" class="ml-4" @click.prevent="componentField.onChange('')"
              >Clear</Button
            >
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="standardName"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>StandardName</FormLabel>
          <div class="flex">
            <Select v-bind="componentField">
              <FormControl class="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="n/a" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="option in standardNameOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="outline" class="ml-4" @click.prevent="componentField.onChange('')"
              >Clear</Button
            >
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="majorVersion"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>MajorVersion</FormLabel>
          <FormControl>
            <Input type="text" placeholder="n/a" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="minorVersion"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>MinorVersion</FormLabel>
          <FormControl>
            <Input type="text" placeholder="n/a" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="coordinateSystemType"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>CoordinateSystemType</FormLabel>
          <div class="flex">
            <Select v-bind="componentField">
              <FormControl class="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="n/a" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="option in coordinateSystemTypeOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="outline" class="ml-4" @click.prevent="componentField.onChange('')"
              >Clear</Button
            >
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="coordinateSystemDatum"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>CoordinateSystemDatum</FormLabel>
          <FormControl>
            <Input type="text" placeholder="n/a" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormFooter @cancel="emit('cancel')" :submit-text="variant == 'new' ? 'Create' : 'Save'" />
    </form>
  </div>
</template>
