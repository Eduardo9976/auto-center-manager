<template>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="cpf"
    class="cpf"
    label="CPF"
    placeholder="000.000.000-00"
    type="name"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="name"
    class="name"
    label="Nome"
    placeholder="João da Silva"
    type="name"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="phone"
    class="phone"
    label="Telefone"
    placeholder="11 99999-9999"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="mail"
    class="mail"
    label="Email address"
    placeholder="johndoe@gmail.com"
    type="email"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="cep"
    class="cep"
    label="CEP"
    placeholder="00000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="street"
    class="street"
    label="Rua"
    placeholder="Rua Pio XX"
    type="text"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
    id="number"
    class="number"
    label="Número"
    placeholder="00000-000"
    type="tel"
    variant="outlined"
    color="var(--vt-c-indigo)"
  ></v-text-field>
  <v-text-field
    :rules="[(v) => !!v || 'Field is required']"
    @input="updateValuesInput"
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
import { defineComponent, defineProps, defineEmits } from "vue";

export type Emit =
  | "update:cpf"
  | "update:name"
  | "update:phone"
  | "update:mail"
  | "update:cep"
  | "update:street"
  | "update:number"
  | "update:neigborhood";

defineComponent({
  name: "PersonalInformations",
});

const props = defineProps({
  propName: { type: Number as () => number, default: 1 },
});

const emit = defineEmits([
  "update:cpf",
  "update:name",
  "update:phone",
  "update:mail",
  "update:cep",
  "update:street",
  "update:number",
  "update:neigborhood",
]);

function updateValuesInput({ target }: Event) {
  const EmitEventName = `update:${(target as HTMLInputElement).id}` as Emit;
  const updatedValue = (target as HTMLInputElement).value;

  emit(EmitEventName, updatedValue);
}
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
