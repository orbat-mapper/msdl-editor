<script setup lang="ts">
// The shadcn context menu component is not compatible with maplibre-gl. The contextmenu event
// is not triggered as expected. A workaround is to use the maplibre-gl context menu event and
// dropdown menu that will be positioned manually. Unfortunately we lose the longpress event,
// so it will currently not work on mobile devices.

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CrosshairIcon } from "lucide-vue-next";
import { computed, ref } from "vue";
import { formatDecimalDegrees } from "@/utils.ts";
import type { Position } from "geojson";
import type { MapContextMenuEvent } from "@/components/types.ts";
import MilSymbol from "@/components/MilSymbol.vue";
import { useSelectStore } from "@/stores/selectStore.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { Badge } from "@/components/ui/badge";
import type { LngLatElevationTuple, LngLatTuple } from "@orbat-mapper/msdllib";
import YesNoDialog from "@/components/YesNoDialog.vue";
import type { TacticalJson } from "@orbat-mapper/msdllib/dist/lib/common";
import { mapProviders, useMapLayerStore } from "@/stores/mapLayerStore.ts";
import { toast } from "vue-sonner";
import { useSideStore } from "@/stores/uiStore.ts";

const showConfirmDeleteDialog = ref(false);
const eventItems = ref([] as TacticalJson[]);
const eventUnits = ref([] as TacticalJson[]);

const props = defineProps<{ event?: MapContextMenuEvent }>();
const isOpen = defineModel({ default: false });
const selectStore = useSelectStore();
const {
  msdl,
  modifyScenario: { addUnit, addEquipmentItem, removeUnit, removeEquipmentItem },
} = useScenarioStore();
const mapLayerStore = useMapLayerStore();

const clickPosition = computed(() => {
  if (!props.event) return [0, 0];
  return [...props.event.position];
});

const style = computed(() => ({
  top: `${props.event?.y}px`,
  left: `${props.event?.x}px`,
}));

function returnMapProviders(lonLat: Position, zoomLevel = 15) {
  return [
    {
      name: "Google Maps",
      url: `https://www.google.com/maps/@${lonLat[1]},${lonLat[0]},${zoomLevel}z`,
    },
    {
      name: "Google Street View",
      url:
        "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" +
        lonLat[1] +
        "," +
        lonLat[0],
    },
    {
      name: "Bing Maps",
      url: `https://www.bing.com/maps?cp=${lonLat[1]}~${lonLat[0]}&lvl=${zoomLevel}`,
    },
    {
      name: "OpenStreetMap",
      url: `https://www.openstreetmap.org/#map=15/${lonLat[1]}/${lonLat[0]}`,
    },
    {
      name: "Geohack",
      url: `https://geohack.toolforge.org/geohack.php?params=${lonLat[1]}_N_${lonLat[0]}_E`,
    },
  ];
}

function onUnitSelect(activeItemId?: string) {
  if (!activeItemId) return;
  selectStore.activeItem = msdl.value?.getUnitOrEquipmentById(activeItemId) ?? null;
}

function createEquipment(pos: number[]) {
  if (!pos || pos.length < 2 || pos.length > 3) return;
  addEquipmentItem(pos as LngLatTuple | LngLatElevationTuple);
}

function createUnit(pos: number[]) {
  if (msdl.value?.sides.length == 0) return toast.info('No force sides available')
  if (!pos || pos.length < 2 || pos.length > 3) return;
  addUnit(pos as LngLatTuple | LngLatElevationTuple);
}

function deleteItems(event: MapContextMenuEvent) {
  eventItems.value = event.equipment ?? [];
  eventUnits.value = event.units ?? [];
  showConfirmDeleteDialog.value = true;
}

function confirmDelete() {
  eventItems.value.forEach((eq) => removeEquipmentItem(eq.id!));
  eventUnits.value.forEach((u) => removeUnit(u.id!));
}

function cancelDelete() {
  eventItems.value = [];
  eventUnits.value = [];
}
</script>

<template>
  <DropdownMenu v-model:open="isOpen">
    <DropdownMenuTrigger
      class="absolute pointer-events-none data-[state=closed]:*:hidden"
      :style="style"
    >
      <CrosshairIcon class="size-6 text-red-900/70 -translate-x-1/2 -translate-y-1/2" />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-56 data-[state=open]:animate-none data-[state=closed]:animate-none"
      align="start"
      :sideOffset="0"
    >
      <DropdownMenuLabel v-if="event">{{ formatDecimalDegrees(clickPosition) }}</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuSub v-if="!event?.units?.length && !event?.equipment?.length">
        <DropdownMenuSubTrigger><span>Create new</span></DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem as-child
            ><a @click="createUnit(clickPosition)">Unit</a></DropdownMenuItem
          >
          <DropdownMenuItem as-child
            ><a @click="createEquipment(clickPosition)">Equipment item</a></DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />

      <DropdownMenuSub>
        <DropdownMenuSubTrigger><span>Open in</span></DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem
            v-for="{ name, url } in returnMapProviders(clickPosition, event?.zoomLevel)"
            :key="url"
            as-child
            ><a :href="url" target="_blank">{{ name }}</a></DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuSub v-if="event?.units?.length">
        <DropdownMenuSubTrigger
          >Units
          <Badge class="ml-2" variant="secondary">{{
            event.units.length
          }}</Badge></DropdownMenuSubTrigger
        >
        <DropdownMenuSubContent class="max-h-[70vh] overflow-auto">
          <DropdownMenuItem
            v-for="item in event.units"
            :key="item.id"
            @select.prevent="onUnitSelect(item.id)"
          >
            <MilSymbol :sidc="item.sidc" /><span
              :class="item.id === selectStore.activeItem?.objectHandle ? 'font-bold' : ''"
              >{{ item.label }}</span
            >
          </DropdownMenuItem>
        </DropdownMenuSubContent> </DropdownMenuSub
      ><DropdownMenuSub v-if="event?.equipment?.length">
        <DropdownMenuSubTrigger
          >Equipment
          <Badge class="ml-2" variant="secondary">{{
            event.equipment.length
          }}</Badge></DropdownMenuSubTrigger
        >
        <DropdownMenuSubContent class="max-h-[70vh] overflow-auto">
          <DropdownMenuItem
            v-for="item in event.equipment"
            :key="item.id"
            @select.prevent="onUnitSelect(item.id)"
          >
            <MilSymbol :sidc="item.sidc" /><span
              :class="item.id === selectStore.activeItem?.objectHandle ? 'font-bold' : ''"
              >{{ item.label }}</span
            >
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuItem
        v-if="event?.units?.length || event?.equipment?.length"
        @select="deleteItems(event)"
        >Delete
      </DropdownMenuItem>
      <DropdownMenuSeparator v-if="event?.units?.length || event?.equipment?.length" />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Map baselayer</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup v-model="mapLayerStore.baseLayer">
            <DropdownMenuRadioItem
              v-for="{ label, value } in mapProviders"
              :key="value"
              :value
              @select.prevent
            >
              {{ label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
  <YesNoDialog
    v-model:open="showConfirmDeleteDialog"
    title="Confirm deleting items"
    @yes="confirmDelete"
    @no="cancelDelete"
  >
    <template #description>
      <p class="mb-2">Are you sure you want to delete the following item(s)?</p>
      <div v-if="eventUnits.length">
        <p class="text-bold">Units:</p>
        <ul class="list-disc pl-5 max-h-48 overflow-y-auto mb-2">
          <li v-for="item in eventUnits" :key="item.id">{{ item.label }}</li>
        </ul>
      </div>
      <div v-if="eventItems.length">
        <p class="text-bold">Equipment items:</p>
        <ul class="list-disc pl-5 max-h-48 overflow-y-auto mb-2">
          <li v-for="item in eventItems" :key="item.id">{{ item.label }}</li>
        </ul>
      </div>
    </template>
  </YesNoDialog>
</template>
