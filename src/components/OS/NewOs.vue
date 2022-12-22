<template>
  <form class="new-os">
    <TheFieldset class="new-os-fieldset" legend="Informações pessoal">
      <PersonalInformations
        v-model:cpf="payloadForm.personalInformations.cpf"
        v-model:name="payloadForm.personalInformations.name"
        v-model:phone="payloadForm.personalInformations.phone"
        v-model:mail="payloadForm.personalInformations.mail"
        v-model:postalCode="payloadForm.personalInformations.postalCode"
        v-model:street="payloadForm.personalInformations.street"
        v-model:number="payloadForm.personalInformations.number"
        v-model:neigborhood="payloadForm.personalInformations.neigborhood"
      />
    </TheFieldset>
    <TheFieldset class="new-os-fieldset" legend="Informações do veículo">
      <VehicleInformations
        v-model:licensePlate="payloadForm.personalInformations.cpf"
        v-model:manufacturer="payloadForm.personalInformations.name"
        v-model:model="payloadForm.personalInformations.phone"
        v-model:color="payloadForm.personalInformations.mail"
        v-model:defect="payloadForm.personalInformations.postalCode"
      />
    </TheFieldset>
    <v-btn class="new-os-button-submit" color="success" fab x-large dark>
      Cadastrar nova OS
    </v-btn>
  </form>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import TheFieldset from "@/components/TheFieldset.vue";
import PersonalInformations from "./PersonalInformations.vue";
import VehicleInformations from "./VehicleInformations.vue";

defineComponent({
  name: "NewOS",
  components: {
    PersonalInformations,
  },
});

const payloadForm = reactive({
  personalInformations: {
    cpf: "",
    name: "",
    phone: "",
    mail: "",
    postalCode: "046.22-032",
    street: "xxx",
    number: "",
    neigborhood: "",
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/mixins-and-helpers";

.new-os {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-fieldset {
    display: flex;
    flex-wrap: wrap;
    gap: rem(12);

    @include breakpoint(mobile) {
      flex-direction: column;
    }
  }

  &-button-submit {
    margin: 12px auto 40px;
  }
}
</style>
