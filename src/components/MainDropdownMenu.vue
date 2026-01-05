<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLinkIcon, SettingsIcon } from "lucide-vue-next";
import { useDialogStore } from "@/stores/dialogStore.ts";

import { useLayerStore, useMapSettingsStore } from "@/stores/layerStore.ts";
import { useScenarioStore } from "@/stores/scenarioStore.ts";
import { useScenarioActions } from "@/composables/scenarioActions.ts";
import { mapProviders, useMapLayerStore } from "@/stores/mapLayerStore.ts";

const store = useLayerStore();
const mapSettings = useMapSettingsStore();
const { msdl, undo, redo, canUndo, canRedo } = useScenarioStore();
const { dispatchAction } = useScenarioActions();

const dialogStore = useDialogStore();
const mapLayerStore = useMapLayerStore();
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="p-2 hover:bg-accent rounded flex items-center gap-2 data-[state=open]:bg-accent"
    >
      <span class="font-bold tracking-tight">MSDL editor</span>
      <ChevronDown
        class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="rounded min-w-48" align="start">
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>File</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem @select="dialogStore.toggleCreateMSDLDialog()"
            ><span id="create-new-msdl">Create new MSDL...</span></DropdownMenuItem
          >
          <DropdownMenuItem @click="dispatchAction('DownloadMSDL')">Download MSDL</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="dispatchAction('LoadMSDLFromFile')"
            >Load MSDL from file ...</DropdownMenuItem
          >
          <DropdownMenuItem @select="dialogStore.toggleUrlDialog()"
            >Load MSDL from URL ...</DropdownMenuItem
          >
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="dispatchAction('ExportKML')"
            >Export as KML/KMZ</DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Edit</DropdownMenuSubTrigger>
        <DropdownMenuSubContent class="w-48">
          <DropdownMenuItem @select="undo()" :disabled="!canUndo">
            Undo <DropdownMenuShortcut>Ctrl+Z</DropdownMenuShortcut></DropdownMenuItem
          >
          <DropdownMenuItem @select="redo()" :disabled="!canRedo"
            >Redo <DropdownMenuShortcut>Ctrl+shift+Z</DropdownMenuShortcut></DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Scenario</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem @click="dialogStore.toggleAssociationDialog()"
            >Side associations ...</DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
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
              <div class="flex w-full items-center gap-2">
                <span class="flex-1 text-left">
                  {{ label }}
                </span>
                <Button
                  v-if="value === 'wms'"
                  variant="ghost"
                  class="ml-2 inline-flex h-4 w-4 items-center justify-center text-muted-foreground hover:text-foreground"
                  @click.stop.prevent="dialogStore.toggleWMSBaseLayerDialog()"
                >
                  <SettingsIcon class="h-3 w-3" />
                </Button>
                <Button
                  v-else-if="value === 'xyz'"
                  variant="ghost"
                  class="ml-2 inline-flex h-4 w-4 items-center justify-center text-muted-foreground hover:text-foreground"
                  @click.stop.prevent="dialogStore.toggleXYZBaseLayerDialog()"
                >
                  <SettingsIcon class="h-3 w-3" />
                </Button>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger :disabled="!msdl">Map debugging</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuCheckboxItem v-model="store.showIconAnchors" @select.prevent
            >Show icon anchors</DropdownMenuCheckboxItem
          >
          <DropdownMenuCheckboxItem v-model="mapSettings.showCollisionBoxes" @select.prevent
            >Show collision boxes</DropdownMenuCheckboxItem
          >
          <DropdownMenuCheckboxItem v-model="mapSettings.showTileBoundaries" @select.prevent
            >Show tile boundaries</DropdownMenuCheckboxItem
          >
          <DropdownMenuCheckboxItem v-model="mapSettings.showPadding" @select.prevent
            >Show padding</DropdownMenuCheckboxItem
          >
          <DropdownMenuCheckboxItem v-model="mapSettings.showOverdrawInspector" @select.prevent
            >Show overdraw inspector</DropdownMenuCheckboxItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem as-child
            ><a href="https://github.com/orbat-mapper/msdl-editor/" target="_blank"
              ><ExternalLinkIcon /> GitHub project page</a
            ></DropdownMenuItem
          >
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
