<template>
  <div class="loading-overlay">
    <div class="loading-ring"></div>
    <div class="loading-text">{{ message }}</div>
    <div class="loading-sub">Iltimos kuting...</div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Yuklanmoqda..."
  }
})
</script>