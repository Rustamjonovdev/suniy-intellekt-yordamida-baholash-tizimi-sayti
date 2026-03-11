<template>
  <div>
    <div
      v-if="testStore.testHistory.length"
      class="glass-card"
      style="padding: 32px; margin-bottom: 24px;"
    >
      <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:24px; flex-wrap:wrap;">
        <div style="font-size:18px; font-weight:700;">So‘nggi test natijalari</div>

        <button class="btn btn-ghost btn-sm" @click="clearHistory">
          🗑 Tarixni tozalash
        </button>
      </div>

      <div
        v-for="entry in limitedHistory"
        :key="entry.id"
        class="score-bar-item"
      >
        <div class="sbi-header">
          <span class="sbi-name">{{ entry.name }}</span>
          <span class="sbi-score">
            {{ entry.correct }}/{{ entry.total }} — {{ entry.pct }}% · {{ entry.date }}
          </span>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill custom-bar"
            :style="{
              width: entry.pct + '%',
              background: progressBackground(entry.pct)
            }"
          ></div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="glass-card"
      style="padding: 60px 32px; text-align: center;"
    >
      <div style="font-size:48px; margin-bottom:16px;">📭</div>
      <div style="font-size:18px; font-weight:700; margin-bottom:8px;">
        Hali ma’lumot yo‘q
      </div>
      <p style="color: var(--muted);">
        Dashboardda ko‘rish uchun testni yakunlang
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTestStore } from '@/stores/test'
import { useAppStore } from '@/stores/app'

const testStore = useTestStore()
const appStore = useAppStore()

const limitedHistory = computed(() => testStore.testHistory.slice(0, 10))

function progressBackground(score) {
  if (score >= 70) {
    return 'linear-gradient(90deg, var(--accent), #86efac)'
  }
  if (score >= 50) {
    return 'linear-gradient(90deg, #f59e0b, #fcd34d)'
  }
  return 'linear-gradient(90deg, #ef4444, #fca5a5)'
}

function clearHistory() {
  testStore.clearHistory()
  appStore.addToast('Tarix tozalandi', 'success')
}
</script>

<style scoped>
.custom-bar {
  transition: width 0.5s ease;
}
</style>