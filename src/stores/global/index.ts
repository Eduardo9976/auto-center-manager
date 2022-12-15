import { state } from "./state"
import * as getters from "./getters"
import * as actions from "./actions"
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GLOBAL", () => {
  return {
    state,
    ...getters,
    ...actions
  };
});
