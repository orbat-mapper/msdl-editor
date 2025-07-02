<script setup lang="ts">
import type { ScenarioId } from "@orbat-mapper/msdllib";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormFooter from "@/components/FormFooter.vue";
import type { ScenarioIdType } from "@orbat-mapper/msdllib/dist/lib/scenarioid";
import { Calendar } from "lucide-vue-next";

type FormVariant = "new" | "edit";

const props = withDefaults(defineProps<{ item: ScenarioId; variant?: FormVariant }>(), {
  variant: "edit",
});
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "update", value: Partial<ScenarioIdType>): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string(),
    modificationDate: z.string(),
    securityClassification: z.string(),
    type: z.string(),
    version: z.string(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: props.item.name || "",
    description: props.item.description || "",
    modificationDate: props.item.modificationDate || "",
    securityClassification: props.item.securityClassification || "",
    type: props.item.type || "",
    version: props.item.version || "",
  },
});

function setCurrentDate() {
  form.setFieldValue("modificationDate", new Date().toISOString().split("T")[0]);
}

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
      <FormField
        v-slot="{ componentField }"
        name="description"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Input type="text" placeholder="" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="securityClassification"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Security classification</FormLabel>
          <FormControl>
            <Input type="text" placeholder="e.g. UNCLASSIFIED" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="modificationDate"
        :validate-on-blur="!form.isFieldDirty"
      >
        <FormItem>
          <FormLabel>Modification date</FormLabel>
          <FormControl>
            <div class="flex w-full max-w-sm items-center gap-1.5">
              <Input type="text" placeholder="YYYY-MM-DD" v-bind="componentField" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="outline" size="icon" @click.prevent="setCurrentDate">
                      <Calendar class="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent> Set to current date </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="type" :validate-on-blur="!form.isFieldDirty">
        <FormItem>
          <FormLabel>Type</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="version" :validate-on-blur="!form.isFieldDirty">
        <FormItem>
          <FormLabel>Version</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormFooter
        @cancel="emit('cancel')"
        :submit-text="variant == 'new' ? 'Create' : 'Save'"
      />
    </form>
  </div>
</template>
