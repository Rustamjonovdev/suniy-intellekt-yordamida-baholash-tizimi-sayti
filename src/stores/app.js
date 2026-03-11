import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
    loadingMsg: '',
    showApiModal: false,
    apiKey: localStorage.getItem('eduai_key') || '',
    toasts: [],
  }),

  actions: {
    setLoading(status, message = '') {
      this.loading = status
      this.loadingMsg = message
    },

    openApiModal() {
      this.showApiModal = true
    },

    closeApiModal() {
      this.showApiModal = false
    },

    saveApiKey(key) {
      this.apiKey = key
      localStorage.setItem('eduai_key', key)
      this.showApiModal = false
      this.addToast('API kalit saqlandi!', 'success')
    },

    addToast(msg, type = 'info') {
      const id = Date.now() + Math.random()
      this.toasts.push({ id, msg, type })

      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id)
      }, 3500)
    }
  }
})