<template>
  <v-text-field
    v-model="getCpf"
    :rules="[(v) => !!v || 'Field is required']"
    id="cpf"
    class="cpf"
    label="CPF"
    placeholder="000.000.000-00"
    type="name"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getName"
    :rules="[(v) => !!v || 'Field is required']"
    id="name"
    class="name"
    label="Nome"
    placeholder="João da Silva"
    type="name"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getPhone"
    :rules="[(v) => !!v || 'Field is required']"
    id="phone"
    class="phone"
    label="Telefone"
    placeholder="11 99999-9999"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getMail"
    :rules="[(v) => !!v || 'Field is required']"
    id="mail"
    class="mail"
    label="Email address"
    placeholder="johndoe@gmail.com"
    type="email"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getPostalCode"
    :rules="[(v) => !!v || 'Field is required']"
    id="postalCode"
    class="postalCode"
    label="CEP"
    placeholder="00000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getStreet"
    :rules="[(v) => !!v || 'Field is required']"
    id="street"
    class="street"
    label="Rua"
    placeholder="Rua Pio XX"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getNumber"
    :rules="[(v) => !!v || 'Field is required']"
    id="number"
    class="number"
    label="Número"
    placeholder="00000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getNeigborhood"
    :rules="[(v) => !!v || 'Field is required']"
    id="neigborhood"
    class="neigborhood"
    label="Bairro"
    placeholder="Jardim São Paulo"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits, computed } from "vue";
import type { WritableComputedRef } from "vue";

defineComponent({
  name: "PersonalInformations",
});

const props = defineProps({
  cpf: {
    type: String as () => string,
    default: ""
  },
  name: {
    type: String as () => string,
    default: ""
  },
  phone: {
    type: String as () => string,
    default: ""
  },
  mail: {
    type: String as () => string,
    default: ""
  },
  postalCode: {
    type: String as () => string,
    default: ""
  },
  street: {
    type: String as () => string,
    default: ""
  },
  number: {
    type: String as () => string,
    default: ""
  },
  neigborhood: {
    type: String as () => string,
    default: ""
  },
});

const emit = defineEmits([
  "update:cpf",
  "update:name",
  "update:phone",
  "update:mail",
  "update:postalCode",
  "update:street",
  "update:number",
  "update:neigborhood",
]);

const getCpf: WritableComputedRef<string> = computed({
  get(): string {
    return props.cpf;
  },
  set(newValue: string): void {
    emit("update:cpf", newValue);
  },
});

const getName: WritableComputedRef<string> = computed({
  get(): string {
    return props.name;
  },
  set(newValue: string): void {
    emit("update:name", newValue);
  },
});

const getPhone: WritableComputedRef<string> = computed({
  get(): string {
    return props.phone;
  },
  set(newValue: string): void {
    emit("update:phone", newValue);
  },
});

const getMail: WritableComputedRef<string> = computed({
  get(): string {
    return props.mail;
  },
  set(newValue: string): void {
    emit("update:mail", newValue);
  },
});

const getPostalCode: WritableComputedRef<string> = computed({
  get(): string {
    return props.postalCode;
  },
  set(newValue: string): void {
    emit("update:postalCode", newValue);
  },
});

const getStreet: WritableComputedRef<string> = computed({
  get(): string {
    return props.street;
  },
  set(newValue: string): void {
    emit("update:street", newValue);
  },
});

const getNumber: WritableComputedRef<string> = computed({
  get(): string {
    return props.number;
  },
  set(newValue: string): void {
    emit("update:number", newValue);
  },
});

const getNeigborhood: WritableComputedRef<string> = computed({
  get(): string {
    return props.neigborhood;
  },
  set(newValue: string): void {
    emit("update:neigborhood", newValue);
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/mixins-and-helpers";

.cpf,
.phone {
  flex: 0 1 150px;
}
.name,
.mail {
  flex: 0 1 calc(100% - 150px - rem(12));
}
.cep,
.number {
  flex: 0 1 130px;
}

.street {
  flex: 0 1 calc(100% - 260px - rem(24));
}

.neigborhood {
  flex: 0 1 50%;
}

@include breakpoint(mobile) {
  .cpf,
  .name,
  .mail,
  .phone,
  .cep,
  .street,
  .number,
  .neigborhood {
    flex: 1 1 100%;
  }
}
</style>
