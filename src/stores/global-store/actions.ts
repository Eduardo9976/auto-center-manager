import type { RootState, Actions } from "./types";

export default {
  setViewportWidth(value) {
    (this as RootState).viewportWidth = value;
  },
} as Actions;
