<script setup lang="ts">
import type { DispositionBase, DispositionType } from "@orbat-mapper/msdllib";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import FormFooter from "@/components/FormFooter.vue";

const props = defineProps<{ disposition: DispositionBase }>();
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "update", value: Partial<DispositionType>): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    elevation: z.preprocess((val) => (val === "" ? undefined : val), z.number().optional()),
    directionOfMovement: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.number().min(0).max(360).optional(),
    ),
    speed: z.preprocess((val) => (val === "" ? undefined : val), z.number().optional()),
  }),
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    latitude: props.disposition.location?.[0] || 0,
    longitude: props.disposition.location?.[1] || 0,
    elevation: props.disposition.location?.[2],
    directionOfMovement: props.disposition.directionOfMovement,
    speed: props.disposition.speed,
  },
});

const onSubmit = form.handleSubmit((values) => {
  const result = {
    directionOfMovement: values.directionOfMovement,
    speed: values.speed,
    location: [values.latitude, values.longitude, values.elevation],
  } as DispositionType;
  emit("update", result);
});
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-6 mt-6">
      <FormField v-slot="{ componentField }" name="latitude" :validate-on-blur="!form.isFieldDirty">
        <FormItem>
          <FormLabel>Latitude</FormLabel>
          <FormControl>
            <Input type="number" step="any" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="longitude"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Longitude</FormLabel>
          <FormControl>
            <Input type="number" step="any" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="elevation"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Elevation</FormLabel>
          <FormControl>
            <Input type="number" step="any" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="directionOfMovement"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Direction of Movement</FormLabel>
          <FormControl>
            <Input type="number" step="any" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormDescription>Direction of movement in degrees (0-360)</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="speed" :validate-on-blur="!form.isFieldDirty">
        <FormItem>
          <FormLabel>Speed</FormLabel>
          <FormControl>
            <Input type="number" step="any" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormDescription>Speed of the item</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormFooter @cancel="emit('cancel')" />
    </form>
  </div>
</template>
