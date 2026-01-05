<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { computed, ref } from "vue";
import { isUrl } from "@/utils";

const props = defineProps<{
  layerType: "WMS" | "XYZ";
}>();
const emit = defineEmits<{ updatedUrl: [string] }>();

const open = defineModel<boolean>("open", { required: true });

const layerUrl = ref("");
const isError = ref(false);
const errorMessage = ref("");
const isValidUrl = computed(() => isUrl(layerUrl.value));

async function setBaseLayerUrl() {
  const url = layerUrl.value;
  if (!isValidUrl.value) {
    isError.value = true;
    errorMessage.value = `The url ${url} is not a valid url.`;
    return;
  }
  emit("updatedUrl", url);
}

const getTitle = () => {
  return `Provide ${props.layerType} URL of a custom base layer for the map`;
};

const getDescription = () => {
  return `Please look at the maplibre-gl documentation for ${props.layerType}-url formats, e.g.
${props.layerType === "XYZ" ? "https://tile.openstreetmap.org/{z}/{x}/{y}.png" : "https://ows.terrestris.de/osm/service?service=WMS&request=GetMap&version=1.1.1&layers=TOPO-WMS%2COSM-Overlay-WMS&styles=&format=image%2Fpng&transparent=true&info_format=text%2Fhtml&tiled=false&srs=EPSG:3857&bbox={bbox-epsg-3857}&width=256&height=256"}`;
};
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-[600px]">
      <form @submit.prevent="setBaseLayerUrl()">
        <DialogHeader>
          <DialogTitle> {{ getTitle() }}</DialogTitle>
          <DialogDescription class="w-full max-w-md break-words">
            {{ getDescription() }}
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="name" class=""> Layer URL </Label>
            <Input id="name" type="text" v-model="layerUrl as string" />
          </div>
        </div>
        <p v-if="isError" class="text-sm text-destructive-foreground">
          {{ errorMessage }}
        </p>
        <DialogFooter>
          <Button type="submit">Set baselayer url</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
