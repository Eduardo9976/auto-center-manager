import { reactive } from "vue";
import type { State } from "./types";
import { RESET_ALERT } from "./helpers";

export const state: State = reactive({
    viewportWidth: 0,
    alert: RESET_ALERT,
    loading: false,
  });