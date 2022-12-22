<template>
  <v-text-field
    v-model="getlicensePlate"
    :rules="[(v) => !!v || 'Field is required']"
    id="license-plate"
    class="vehicle-informations-license-plate"
    label="Placa"
    placeholder="CWO-9999"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-autocomplete
    v-model="getManufacturer"
    :items="['foo', 'bar', 'fizz', 'buzz']"
    class="vehicle-informations-manufacturer"
    auto-select-first
    variant="outlined"
    label="Fabricante"
    color="var(--vt-c-indigo)"
  ></v-autocomplete>
  <v-autocomplete
    v-model="getModel"
    :items="['foo', 'bar', 'fizz', 'buzz']"
    class="vehicle-informations-model"
    auto-select-first
    variant="outlined"
    label="Modelo"
    color="var(--vt-c-indigo)"
  ></v-autocomplete>
  <v-text-field
    v-model="getColor"
    :rules="[(v) => !!v || 'Field is required']"
    id="color"
    class="vehicle-informations-color"
    label="Cor"
    placeholder="Azul"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-textarea
    v-model="getDefect"
    id="defect"
    class="vehicle-informations-defect"
    label="Defeito relatado"
    auto-grow
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-textarea>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, computed } from "vue";
import type { WritableComputedRef } from "vue";

defineComponent({
  name: "VehicleInformations",
});

const props = defineProps({
  licensePlate: {
    type: String as () => string,
    default: "",
  },
  manufacturer: {
    type: String as () => string,
    default: "",
  },
  model: {
    type: String as () => string,
    default: "",
  },
  color: {
    type: String as () => string,
    default: "",
  },
  defect: {
    type: String as () => string,
    default: "",
  },
});

const emit = defineEmits([
  "update:licensePlate",
  "update:manufacturer",
  "update:model",
  "update:color",
  "update:defect",
]);

const getlicensePlate: WritableComputedRef<string> = computed({
  get(): string {
    return props.licensePlate;
  },
  set(newValue: string): void {
    emit("update:licensePlate", newValue);
  },
});

const getManufacturer: WritableComputedRef<string> = computed({
  get(): string {
    return props.manufacturer;
  },
  set(newValue: string): void {
    emit("update:manufacturer", newValue);
  },
});

const getModel: WritableComputedRef<string> = computed({
  get(): string {
    return props.model;
  },
  set(newValue: string): void {
    emit("update:model", newValue);
  },
});

const getColor: WritableComputedRef<string> = computed({
  get(): string {
    return props.color;
  },
  set(newValue: string): void {
    emit("update:color", newValue);
  },
});

const getDefect: WritableComputedRef<string> = computed({
  get(): string {
    return props.defect;
  },
  set(newValue: string): void {
    emit("update:defect", newValue);
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/mixins-and-helpers";

.vehicle-informations {
  &-license-plate {
    flex: 0 0 150px;
  }
  &-manufacturer,
  &-model,
  &-color {
    flex: 1 0 200px;
  }

  &-defect {
    min-width: 100%;
  }

  @include breakpoint(mobile) {
    &-license-plate,
    &-manufacturer,
    &-model,
    &-color {
      flex: 1;
    }
  }
}
</style>
