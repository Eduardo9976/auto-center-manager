<template>
  <v-text-field
    v-model="getCpf"
    :rules="[(v) => !!v || 'Field is required']"
    id="cpf"
    class="personal-informations-cpf"
    label="CPF"
    placeholder="000.000.000-00"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
    v-mask-cpf
  ></v-text-field>
  <v-text-field
    v-model="getName"
    :rules="[(v) => !!v || 'Field is required']"
    id="name"
    class="personal-informations-name"
    label="Nome"
    placeholder="João da Silva"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getPhone"
    :rules="[(v) => !!v || 'Field is required']"
    id="phone"
    class="personal-informations-phone"
    label="Telefone"
    placeholder="11 99999-9999"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
    v-mask-phone.br
  ></v-text-field>
  <v-text-field
    v-model="getMail"
    :rules="[(v) => !!v || 'Field is required']"
    id="mail"
    class="personal-informations-mail"
    label="Email address"
    placeholder="johndoe@gmail.com"
    type="email"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getPostalCode"
    :rules="[(v) => !!v || 'Field is required']"
    :disabled="globalStore.getLoading"
    id="postalCode"
    class="personal-informations-postalCode"
    label="CEP"
    placeholder="00.000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
    v-mask-cep
  ></v-text-field>
  <v-text-field
    v-model="getStreet"
    :rules="[(v) => !!v || 'Field is required']"
    :disabled="postalCode.length < 10"
    id="street"
    class="personal-informations-street"
    label="Rua"
    placeholder="Rua Pio XX"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getNeigborhood"
    :rules="[(v) => !!v || 'Field is required']"
    :disabled="postalCode.length < 10"
    id="neigborhood"
    class="personal-informations-neigborhood"
    label="Bairro"
    placeholder="Jardim São Paulo"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    v-model="getNumber"
    :rules="[(v) => !!v || 'Field is required']"
    :disabled="postalCode.length < 10"
    id="number"
    class="personal-informations-number"
    label="Número"
    placeholder="00000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
    v-mask-number
  ></v-text-field>
</template>

<script lang="ts" setup>
import { useGlobalStore } from "@/stores/global";
import { defineComponent, defineProps, defineEmits, computed, watch } from "vue";
import type { WritableComputedRef } from "vue";

defineComponent({
  name: "PersonalInformations",
});

const props = defineProps({
  cpf: {
    type: String as () => string,
    default: "",
  },
  name: {
    type: String as () => string,
    default: "",
  },
  phone: {
    type: String as () => string,
    default: "",
  },
  mail: {
    type: String as () => string,
    default: "",
  },
  postalCode: {
    type: String as () => string,
    default: "",
  },
  street: {
    type: String as () => string,
    default: "",
  },
  number: {
    type: String as () => string,
    default: "",
  },
  neigborhood: {
    type: String as () => string,
    default: "",
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

const globalStore = useGlobalStore();

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

function callCepApi() {
  globalStore.setLoading()
  console.log('chamar API');
}

watch(getPostalCode, (newValue) => {
  if (newValue.length === 10) callCepApi()
})
</script>

<style scoped lang="scss">
@import "@/assets/mixins-and-helpers";

.personal-informations {
  &-cpf,
  &-phone {
    flex: 0 1 170px;
  }
  &-name,
  &-mail {
    flex: 0 1 calc(100% - 170px - rem(12));
  }
  &-postalCode,
  &-number {
    flex: 0 0 130px;
  }

  &-street,
  &-neigborhood {
    min-width: 200px;
  }

  @include breakpoint(mobile) {
    &-cpf,
    &-name,
    &-mail,
    &-phone,
    &-postalCode,
    &-number {
      flex: 1 1 100%;
    }
  }
}
</style>
