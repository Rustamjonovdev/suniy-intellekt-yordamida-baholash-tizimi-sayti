<template>
  <button
    :class="['btn', variantClass, sizeClass]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  variant: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "md"
  }
})

const variantClass = computed(() => {
  return {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost"
  }[props.variant]
})

const sizeClass = computed(() => {
  return {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
  }[props.size]
})
</script>