<script setup lang="ts">
import PanelDataGrid from "@/components/PanelDataGrid.vue";
import { useEntityTypeStore } from "@/stores/entityTypeStore";
import { computed, watch, ref, type Ref } from "vue";
import { SisoEnum } from "@siso-entity-type/lib";
import { storeToRefs} from "pinia";
import EntityTypeForm from "@/components/EntityTypeForm.vue";
import EntityTypeSearch from "@/components/EntityTypeSearch.vue";

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pencil } from "lucide-vue-next";
import { Separator } from '@/components/ui/separator'

// Define store and obtain entityType from parent
const { sisoEnums } = storeToRefs(useEntityTypeStore());
const entityType = defineModel<string>();
const localEntityType = computed(() => { return entityType.value || "" })
const store = useEntityTypeStore(); 
const {
  selectedEntityType,
  selectedCountry,
  selectedKind,
  selectedDomain,
  selectedCategory,
  selectedSubcategory,
  selectedSpecific,
  selectedExtra,
} = storeToRefs(store);

// Define entityTypeFields
const entityTypeFields = computed(() => {
  if (!sisoEntityType.value) return [];
  return [
    { label: "Kind", value: sisoEnums.value.getKindName(sisoEntityType.value) },
    { label: "Domain", value: sisoEnums.value.getDomainName(sisoEntityType.value) },
    { label: "Country", value: sisoEnums.value.getCountryName(sisoEntityType.value) },
    { label: "Category", value: sisoEnums.value.getCategoryName(sisoEntityType.value) },
    { label: "Subcategory", value: sisoEnums.value.getSubcategoryName(sisoEntityType.value) },
    { label: "Specific", value: sisoEnums.value.getSpecificName(sisoEntityType.value) },
    { label: "Extra", value: sisoEnums.value.getExtraName(sisoEntityType.value) },
  ];
});

// Local variables types
interface LocalVariables {
  Country: Ref<number | null>;
  Kind: Ref<number | null>;
  Domain: Ref<number | null>;
  Category: Ref<number | null>;
  Subcategory: Ref<number | null>;
  Specific: Ref<number | null>;
  Extra: Ref<number | null>;
}

type LocalVariableKeys = keyof typeof localVariables;

// Define local variables
const localVariables: LocalVariables = {
  Country: ref(0),
  Kind: ref(0),
  Domain: ref(0),
  Category: ref(0),
  Subcategory: ref(0),
  Specific: ref(0),
  Extra: ref(0),
};

// Update local variables if store changes
watch(selectedCountry, (newVal: number | null) => {localVariables.Country.value = localVariables.Country.value !== newVal ? newVal : localVariables.Country.value});
watch(selectedKind, (newVal: number | null) => {localVariables.Kind.value = localVariables.Kind.value !== newVal ? newVal : localVariables.Kind.value});
watch(selectedDomain, (newVal: number | null) => (localVariables.Domain.value = localVariables.Domain.value !== newVal ? newVal : localVariables.Domain.value));
watch(selectedCategory, (newVal: number | null) => (localVariables.Category.value = localVariables.Category.value !== newVal ? newVal : localVariables.Category.value));
watch(selectedSubcategory, (newVal: number | null) => (localVariables.Subcategory.value = localVariables.Subcategory.value !== newVal ? newVal : localVariables.Subcategory.value),);
watch(selectedSpecific, (newVal: number | null) => (localVariables.Specific.value = localVariables.Specific.value !== newVal ? newVal : localVariables.Specific.value));
watch(selectedExtra, (newVal: number | null) => (localVariables.Extra.value = localVariables.Extra.value !== newVal ? newVal : localVariables.Extra.value));

// Update methods for the store
const updateMap = {
  Country: async () => {
    store.selectCountry(localVariables.Country.value);
  },
  Kind: async () => {
    store.selectKind(localVariables.Kind.value);
  },
  Domain: async () => {
    store.selectDomain(localVariables.Domain.value);
    localVariables.Category.value = 0;
    updateMap.Category();
  },
  Category: async () => {
    store.selectCategory(localVariables.Category.value);
    localVariables.Subcategory.value = 0;
    updateMap.Subcategory();
  },
  Subcategory: async () => {
    store.selectSubcategory(localVariables.Subcategory.value);
    localVariables.Specific.value = 0;
    updateMap.Specific();
  },
  Specific: async () => {
    store.selectSpecific(localVariables.Specific.value);
    localVariables.Extra.value = 0;
    updateMap.Extra();
  },
  Extra: async () => {
    store.selectExtra(localVariables.Extra.value);
  }
};

// Select entities in the store, in order to populate the dropdown lists
const populateBuilder = async (entType: string) => {
  const parts = entType.split(".").map((s) => +s);
  if (parts.length < 7) return console.warn(`Could not populate entitytype: ${entType}`);
  await store.selectCountry(parts[2]!, false);
  await store.selectKind(parts[0]!);
  await store.selectDomain(parts[1]!);
  await store.selectCategory(parts[3]!);
  await store.selectSubcategory(parts[4]!);
  await store.selectSpecific(parts[5]!);
  await store.selectExtra(parts[6]!);
};

// Variable for the input field and search field
const typeQuery = ref<string>("");

// The 'set' button
const enterType = async (evt: any) => {
  store.resetCategories();
  await populateBuilder(typeQuery.value);
};

const sisoEntityType = computed(() =>
  entityType.value ? SisoEnum.fromString(entityType.value) : null,
);

// Filter out subsequent fields that are the same as the previous, e.g. specific == extra
const uniqueEntityTypeFields = computed(() => {
  return entityTypeFields.value.reduce(
    (acc, field) => {
      if (acc.length === 0 || acc[acc.length - 1].value !== field.value) {
        acc.push(field);
      }
      return acc;
    },
    [] as { label: string; value: string }[],
  );
}); 

// Update entitype value upon 'save'
const updateEntityType = (newType: string) => {

  // Update Equipment, UI is updated through a re-render
  entityType.value = newType;
};

// Set dialog UI upon opening
const openDialog = async () => {
  typeQuery.value = localEntityType.value
  store.resetCategories();
  setLocalVariables(localEntityType.value)       // The local variables reset to null after saving the new entityType number
  await populateBuilder(localEntityType.value);
};

const setLocalVariables = (entType: string) => {
  const parts = entType.split(".").map((s) => +s);
  if (parts.length < 7) return console.warn(`Could not populate entitytype: ${entType}`);
  localVariables.Country.value = parts[2]!
  localVariables.Kind.value = parts[0]!
  localVariables.Domain.value = parts[1]!
  localVariables.Category.value = parts[3]!
  localVariables.Subcategory.value = parts[4]!
  localVariables.Specific.value = parts[5]!
  localVariables.Extra.value = parts[6]!
};

</script>

<template>
  <div v-if="sisoEntityType">
    
    <h4 class="text-sm font-bold mt-2 flex items-center">
      <span>Entity type: {{ entityType || "Unknown" }}</span>

      <Dialog :modal="false">
        <DialogTrigger as-child>
          <Button variant="outline" @click="openDialog">
            <Pencil class="size-4" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to the entity type. Click save when done.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex w-full max-w-sm items-center gap-2">
            <Label for="entityTypeNumber" class="text-nowrap">Entity type :</Label>
            <Input type="text" v-model="typeQuery"/>
            <Button type="submit" @click="enterType">Set</Button>
          </div>

          <div className="relative my-4 flex items-center justify-center overflow-hidden">
            <Separator />
            <div className="px-2 text-center bg-background text-sm">OR</div>
            <Separator />
          </div>
          
          <PanelDataGrid class="" v-if="true">

            <template v-for="(field, index) in uniqueEntityTypeFields" :key="index">
              <span class="p-2">{{ field.label }}</span>
              
              <EntityTypeForm 
                v-model= "localVariables[field.label as LocalVariableKeys].value"
                :label = "field.label"
                :update-method= "updateMap[field.label as LocalVariableKeys]"
              ></EntityTypeForm>
            </template>

          </PanelDataGrid>
          <PanelDataGrid class="mt-4" v-else>
            <span class="font-semibold">No entitytype provided</span>
          </PanelDataGrid>

          <Label for="entityTypeNumber" class="text-nowrap">Search by description</Label>
          <EntityTypeSearch :populate-builder="populateBuilder"></EntityTypeSearch>
          <Separator/>

          <DialogFooter>
            <Input type="text" v-model="selectedEntityType" disabled/>
            <DialogClose as-child>
              <Button type="submit" @click="updateEntityType(selectedEntityType)">
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </h4>

    <PanelDataGrid class="mt-4" v-if="sisoEntityType">
      <template v-for="(field, index) in uniqueEntityTypeFields" :key="index">
        <span class="font-semibold">{{ field.label }}</span>
        <span>{{ field.value }}</span>
      </template>
    </PanelDataGrid>
    <PanelDataGrid class="mt-4" v-else>
      <span class="font-semibold">No entitytype provided</span>
    </PanelDataGrid>
  </div>
</template>
