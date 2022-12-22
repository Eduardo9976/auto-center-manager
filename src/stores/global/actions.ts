import { state } from "./state";
import type { Alert, RefAlertTimeout } from "./types";
import { RESET_ALERT } from "./helpers";

let refAlertTimeout: RefAlertTimeout;

export function setViewportWidth(value: number) {
  state.viewportWidth = value;
}

export function setAlert(newState: Alert) {
  if (state.alert.active) {
    resetAlert();
    clearTimeout(refAlertTimeout);
  }

  state.alert = newState;
  timeToRemoveAlertOfTheDisplay();
}

export function resetAlert() {
  state.alert = RESET_ALERT;
}

function timeToRemoveAlertOfTheDisplay() {
  refAlertTimeout = setTimeout(() => {
    state.alert = RESET_ALERT;
  }, state.alert.timeToDisplayInMilliseconds);
}

export function setLoading(value: boolean = !state.loading) {
  state.loading = value;
}
