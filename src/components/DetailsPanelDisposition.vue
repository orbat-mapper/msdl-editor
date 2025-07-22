<script setup lang="ts">
import { EquipmentItem, Unit } from "@orbat-mapper/msdllib";
import type { DispositionBase, DispositionType } from "@orbat-mapper/msdllib";
import DescriptionList from "@/components/DescriptionList.vue";
import DescriptionItem from "@/components/DescriptionItem.vue";
import { useToggle } from "@vueuse/core";
import { PencilIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import DispositionEditForm from "@/components/DispositionEditForm.vue";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { computed } from "vue";
import { formatNumber } from "@/lib/utils";
import { getElevation, getLatitude, getLongitude } from "@/lib/geoConvert";

const {
  msdl,
  modifyScenario: { updateItemDisposition },
} = useScenarioStore();

const props = defineProps<{
  item: Unit | EquipmentItem;
}>();

const disposition = computed(() => {
  const unitOrEquipment = msdl.value?.getUnitOrEquipmentById(props.item.objectHandle) ?? null;
  return (unitOrEquipment?.disposition as DispositionBase) ?? null;
});

const [showEditForm, toggleEditForm] = useToggle(false);

const getLat = getLatitude;
const getLon = getLongitude;
const getEle = getElevation;

function onUpdate(data: DispositionType) {
  toggleEditForm();
  updateItemDisposition(props.item.objectHandle, data);
}
</script>

<template>
  <div class="flex items-center justify-between mt-1">
    <h4 class="text-sm font-bold">Disposition</h4>
    <div class="flex items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        @click="toggleEditForm()"
        :disabled="showEditForm"
        ><PencilIcon />
      </Button>
    </div>
  </div>
  <DispositionEditForm
    v-if="showEditForm"
    :disposition="disposition"
    @cancel="toggleEditForm()"
    @update="onUpdate"
  />
  <DescriptionList v-else>
    <DescriptionItem label="Lat / Lon">
      {{ formatNumber(getLat(disposition.location), { units: "°", maxDecimals: 8 }) }} /
      {{ formatNumber(getLon(disposition.location), { units: "°", maxDecimals: 8 }) }}
    </DescriptionItem>
    <DescriptionItem label="Elevation">
      {{ formatNumber(getEle(disposition.location), { units: " m" }) }}
    </DescriptionItem>
    <DescriptionItem label="Direction of Movement">
      {{ formatNumber(disposition.directionOfMovement, { units: "°" }) }}
    </DescriptionItem>
    <DescriptionItem label="Speed">
      {{ formatNumber(disposition.speed, { units: " m/s" }) }}
    </DescriptionItem>
  </DescriptionList>
</template>
