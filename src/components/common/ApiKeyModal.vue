<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="glass-card modal-box">
      <h2 class="modal-title">API Kalit</h2>

      <BaseInput
        type="password"
        placeholder="API key kiriting..."
        v-model="value"
      />

      <div class="modal-actions">
        <BaseButton variant="ghost" @click="$emit('close')">
          Bekor qilish
        </BaseButton>

        <BaseButton variant="primary" @click="save">
          Saqlash
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import BaseButton from "./BaseButton.vue"
import BaseInput from "./BaseInput.vue"

const props = defineProps({
  modelValue: String
})

const emit = defineEmits([
  "update:modelValue",
  "close",
  "save"
])

const value = ref(props.modelValue)

watch(value, v => {
  emit("update:modelValue", v)
})

function save() {
  emit("save")
}
</script>