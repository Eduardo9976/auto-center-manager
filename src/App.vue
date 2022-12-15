<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/global";
import { onMounted, onUnmounted } from "vue";

const globalStore = useGlobalStore();

const onResize = ({ target }: Event) => {
  globalStore.setViewportWidth((target as Window).innerWidth);
};

onMounted(() => {
  window.addEventListener("resize", onResize);
  globalStore.setViewportWidth(window.innerWidth);
});
onUnmounted(() => window.removeEventListener("resize", onResize));
</script>
