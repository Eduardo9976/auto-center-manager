export interface Alert {
  type: 'success' | 'error' | 'warning' | 'info' | undefined
  message: string | undefined
  active: boolean
  timeToDisplayInMilliseconds: number
}

export interface State {
  viewportWidth: number
  alert: Alert
}

export type RefAlertTimeout = string | number | NodeJS.Timeout | undefined
