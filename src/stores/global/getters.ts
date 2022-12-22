import { computed } from "vue";
import { state } from "./state"

export const getViewportWidth = computed(() => state.viewportWidth);
export const getAlert = computed(() => state.alert);
export const getLoading = computed(() => state.loading);