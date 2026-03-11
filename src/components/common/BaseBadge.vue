<template>
  <span :class="['badge', colorClass]">
    <slot />
  </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  color: {
    type: String,
    default: "blue"
  }
})

const colorClass = computed(() => {
  return {
    blue: "badge-blue",
    green: "badge-green",
    red: "badge-red"
  }[props.color]
})
</script>