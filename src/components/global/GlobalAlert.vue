<template>
    <Transition name="slide-fade">
        <v-alert
            v-if="globalStore.state.alert.active"
            :type="globalStore.state.alert.type"
            closable
        >
            {{ globalStore.state.alert.message }}
        </v-alert>
    </Transition>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
import { useGlobalStore } from "@/stores/global";

defineComponent({
  name: "GlobalAlert",
});

const globalStore = useGlobalStore();

</script>
<style lang="scss" scoped>
.v-alert {
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  max-width: 100%;
  overflow: hidden;
  z-index: 10;
}
</style>
