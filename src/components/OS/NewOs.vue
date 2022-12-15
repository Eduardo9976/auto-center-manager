<template>
  <form class="new-os">
    <TheFieldset legend="Informações pessoal" class="new-os-fieldset">
      <PersonalInformations />
    </TheFieldset>
  </form>
</template>
<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
import TheFieldset from "@/components/TheFieldset.vue";
import PersonalInformations from "./PersonalInformations.vue";

defineComponent({
  name: "NewOS",
  components: {
    PersonalInformations
  },
});

const props = defineProps({
  propName: { type: Number as () => number, default: 1 },
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
