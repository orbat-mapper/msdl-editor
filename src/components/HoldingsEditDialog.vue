<script setup lang="ts">
import type { HoldingType } from "@orbat-mapper/msdllib";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormFooter from "@/components/FormFooter.vue";
import { Button } from "@/components/ui/button";
import { CirclePlus, Trash2 } from "lucide-vue-next";
import { useFieldArray, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const open = defineModel<boolean>("open", { required: true });

const props = defineProps<{ holdings: Array<HoldingType>; parentName: string }>();
const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "update", value: Array<HoldingType>): void;
}>();

const formSchema = toTypedSchema(
  z.object({
    holdings: z.array(
      z.object({
        nsnName: z.string(),
        nsnCode: z.string().min(1, "NSN Code is required"),
        onHandQuantity: z.number(),
      }),
    ),
  }),
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    holdings: [{ nsnName: "", nsnCode: "", onHandQuantity: 0 }],
  },
});

const { remove, push, fields } = useFieldArray("holdings");

const onSubmit = form.handleSubmit((values) => {
  console.log("Updating holdings");
  emit("update", values.holdings);
});

form.resetForm({
  values: {
    holdings: props.holdings.map((h) => ({
      nsnName: h.nsnName || "",
      nsnCode: h.nsnCode || "",
      onHandQuantity: h.onHandQuantity || 0,
    })),
  },
});
console.log(`Dialog`);
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="w-auto sm:max-w-[calc(100%-8rem)] max-h-[90dvh] flex-col flex">
      <DialogHeader class="flex-0">
        <DialogTitle>Holdings</DialogTitle>
        <DialogDescription>Edit holdings of {{ props.parentName }}</DialogDescription>
      </DialogHeader>
      <form @submit.prevent="onSubmit">
        <Table class="">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>NSN code</TableHead>
              <TableHead>On hand</TableHead>
              <TableHead><!-- empty --></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(field, i) in fields" :key="field.key">
              <TableCell class="w-1/3 align-top">
                <FormField
                  v-slot="{ componentField, errorMessage }"
                  :name="`holdings[${i}].nsnName`"
                  :validate-on-blur="!form.isFieldDirty"
                >
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="" v-bind="componentField" />
                    </FormControl>
                    <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
                  </FormItem>
                </FormField>
              </TableCell>
              <TableCell class="w-1/3 align-top">
                <FormField
                  v-slot="{ componentField, errorMessage }"
                  :name="`holdings[${i}].nsnCode`"
                  :validate-on-blur="!form.isFieldDirty"
                >
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="" v-bind="componentField" />
                    </FormControl>
                    <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
                  </FormItem>
                </FormField>
              </TableCell>
              <TableCell class="w-1/3 align-top">
                <FormField
                  v-slot="{ componentField, errorMessage }"
                  :name="`holdings[${i}].onHandQuantity`"
                  :validate-on-blur="!form.isFieldDirty"
                >
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="" v-bind="componentField" />
                    </FormControl>
                    <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
                  </FormItem>
                </FormField>
              </TableCell>
              <TableCell>
                <Button type="button" variant="ghost" size="icon" @click="remove(i)">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow class="hover:!bg-transparent">
              <TableCell :colspan="4" class="text-center">
                <Button
                  variant="secondary"
                  @click.stop="push({ nsnName: '', nsnCode: '', onHandQuantity: 0 })"
                >
                  Add holding<CirclePlus />
                </Button>
              </TableCell>
            </TableRow>
            <!-- </form> -->
          </TableBody>
        </Table>
        <DialogFooter>
          <FormFooter @cancel="emit('cancel')"></FormFooter>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
