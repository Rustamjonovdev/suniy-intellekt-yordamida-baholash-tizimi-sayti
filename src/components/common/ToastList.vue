<template>
  <div class="toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', toast.type]"
    >
      {{ toast.msg }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  toasts: {
    type: Array,
    default: () => []
  }
})
</script>