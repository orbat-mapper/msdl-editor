<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { Download, Upload, Grid3x3Icon } from "lucide-vue-next";
import { type ScenarioAction, useScenarioActions } from "@/composables/scenarioActions.ts";

const open = defineModel<boolean>("open", { default: false });
const { dispatchAction: _dispatchAction } = useScenarioActions();

function dispatchAction(action: ScenarioAction) {
  _dispatchAction(action);
  open.value = false;
}
</script>

<template>
  <CommandDialog v-model:open="open" @update:modelValue="open = false">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem value="CREATE_NEW_MSDL" @select="dispatchAction('CreateNewMSDL')">
          <Download />
          <span>Create new MSDL...</span>
        </CommandItem>
        <CommandItem value="LOAD_MSDL_FROM_FILE" @select="dispatchAction('LoadMSDLFromFile')">
          <Upload />
          <span>Load MSDL from file ...</span>
        </CommandItem>
        <CommandItem value="DOWNLOAD_MSDL" @select="dispatchAction('DownloadMSDL')">
          <Download />
          <span>Download MSDL</span>
        </CommandItem>
        <CommandItem value="EXPORT_KML" @select="dispatchAction('ExportKML')">
          <Download />
          <span>Export as KML/KMZ</span>
        </CommandItem>
        <CommandItem value="LOAD_FROM_URL" @select="dispatchAction('LoadFromUrl')">
          <Upload />
          <span>Load MSDL from URL ...</span>
        </CommandItem>
        <CommandItem value="EDIT_ASSOCIATIONS" @select="dispatchAction('EditAssociations')">
          <Grid3x3Icon />
          <span>Show Associations</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
    </CommandList>
  </CommandDialog>
</template>
