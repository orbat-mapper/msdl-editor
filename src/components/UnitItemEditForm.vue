<script setup lang="ts">
import type { Unit } from "@orbat-mapper/msdllib";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import FormFooter from "@/components/FormFooter.vue";
import type { ScenarioIdType } from "@orbat-mapper/msdllib/dist/lib/scenarioid";

const props = defineProps<{ item: Unit }>();
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "update", value: Partial<ScenarioIdType>): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    name: z.string().optional(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: props.item.name || "",
  },
});

const onSubmit = form.handleSubmit((values) => {
  emit("update", values);
});
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-6 mt-6">
      <FormField v-slot="{ componentField }" name="name" :validate-on-blur="!form.isFieldDirty">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input type="text" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormFooter @cancel="emit('cancel')" />
    </form>
  </div>
</template>
