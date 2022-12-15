<template>
    <fieldset>
      <legend class="new-os-legend">{{ legend }}</legend>
      <slot/>
    </fieldset>
</template>
<script lang='ts' setup>
import { defineComponent, defineProps } from 'vue'

defineComponent({
    name: 'TheFieldset'
})

const props = defineProps({
    legend: { 
        type: String as () => string,
        required: true
    }
})
</script>
