<template>
  <input
    class="input-field"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: String
})

defineEmits(["update:modelValue"])
</script>