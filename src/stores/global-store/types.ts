export interface RootState {
  viewportWidth: number;
}

export interface Actions {
  setViewportWidth (this: any, value: number): void;
}
