<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { Toaster } from "vue-sonner";
import { useEntityTypeStore } from "./stores/entityTypeStore";

const entityTypeStore = useEntityTypeStore();

onMounted(() => entityTypeStore.init());
</script>

<template>
  <RouterView />
  <Toaster class="pointer-events-auto" />
</template>
