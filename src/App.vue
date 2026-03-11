<template>
  <div class="app">
    <div class="bg-mesh"></div>
    <div class="grid-overlay"></div>

    <AppNavbar />

    <LoadingOverlay
      v-if="appStore.loading"
      :message="appStore.loadingMsg"
    />

    <ApiKeyModal
      v-if="appStore.showApiModal"
      :model-value="appStore.apiKey"
      @update:model-value="tempApiKey = $event"
      @close="appStore.closeApiModal()"
      @save="saveApiKey"
    />

    <ToastList :toasts="appStore.toasts" />

    <router-view />

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LoadingOverlay from '@/components/common/LoadingOverlay.vue'
import ApiKeyModal from '@/components/common/ApiKeyModal.vue'
import ToastList from '@/components/common/ToastList.vue'

const appStore = useAppStore()
const tempApiKey = ref(appStore.apiKey)

watch(
  () => appStore.showApiModal,
  (val) => {
    if (val) tempApiKey.value = appStore.apiKey
  }
)

function saveApiKey() {
  appStore.saveApiKey(tempApiKey.value)
}
</script>