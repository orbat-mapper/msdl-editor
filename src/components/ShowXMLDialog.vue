<script setup lang="ts">
import { CodeXmlIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { computed } from "vue";
import XmlBeautify from "xml-beautify";

const props = defineProps<{
  item: { element?: Element };
  title?: string;
}>();

const prettyXML = computed(() => {
  if (!props.item.element || !(props.item.element instanceof Element)) {
    return "No XML element available.";
  }
  return new XmlBeautify().beautify(props.item.element.outerHTML, {
    indent: "  ",
    useSelfClosingElement: true,
  });
});

const dialogDescription = computed(() => {
  if (!props.item.element || !(props.item.element instanceof Element)) {
    return "No XML element available.";
  }
  return `XML for ${props.item.element.tagName} element.`;
});
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" :title><CodeXmlIcon /><slot /></Button>
    </DialogTrigger>
    <DialogContent class="w-auto sm:max-w-[calc(100%-8rem)]">
      <DialogHeader>
        <DialogTitle>XML preview</DialogTitle>
        <DialogDescription>{{ dialogDescription }}</DialogDescription>
      </DialogHeader>
      <div class="max-h-[80vh] overflow-auto">
        <pre class="text-sm" tabindex="1">{{ prettyXML }}</pre>
      </div>
    </DialogContent>
  </Dialog>
</template>
