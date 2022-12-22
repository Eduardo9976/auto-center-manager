<template>
  <div class="global-loading">
    <div class="load"></div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "GlobalLoading",
});
</script>
<style scoped lang="scss">
.global-loading {
  background: var(--color-default-black-rgba);
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  z-index: 11;

  .load {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid var(--vt-c-blue);
    border-right-color: transparent;
    animation: rotate 0.8s linear infinite;
  }

  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
}
</style>
