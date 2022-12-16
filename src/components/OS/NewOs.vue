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
  </form>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import TheFieldset from "@/components/TheFieldset.vue";
import PersonalInformations from "./PersonalInformations.vue";

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
    postalCode: "",
    street: "",
    number: "",
    neigborhood: "",
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/mixins-and-helpers";
.new-os-fieldset {
  display: flex;
  flex-wrap: wrap;
  gap: rem(12);

  @include breakpoint(mobile) {
    flex-direction: column;
  }
}
</style>
