import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GLOBAL", () => {
  // State
  const state = reactive({
    viewportWidth: 0,
  });

  // Getters
  const getViewportWidth = computed(() => state.viewportWidth);

  // Actions
  function setViewportWidth(value: number) {
    state.viewportWidth = value;
  }

  return { state, getViewportWidth, setViewportWidth };
});
