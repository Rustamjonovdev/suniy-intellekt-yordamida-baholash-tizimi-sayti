<template>
  <div class="stats-grid">
    <div class="stat-card glass-card">
      <div class="stat-top">
        <div class="stat-icon icon-blue">📝</div>
        <div class="stat-badge">Jami</div>
      </div>

      <div class="stat-value">{{ totalTests }}</div>
      <div class="stat-label">Topshirilgan testlar</div>
    </div>

    <div class="stat-card glass-card">
      <div class="stat-top">
        <div class="stat-icon icon-sky">📈</div>
        <div class="stat-badge">Foiz</div>
      </div>

      <div class="stat-value accent-sky">{{ averageScore }}%</div>
      <div class="stat-label">O‘rtacha natija</div>
    </div>

    <div class="stat-card glass-card">
      <div class="stat-top">
        <div class="stat-icon icon-gold">🏆</div>
        <div class="stat-badge">Best</div>
      </div>

      <div class="stat-value accent-gold">{{ bestScore }}%</div>
      <div class="stat-label">Eng yaxshi natija</div>
    </div>

    <div class="stat-card glass-card">
      <div class="stat-top">
        <div class="stat-icon icon-purple">❓</div>
        <div class="stat-badge">Live</div>
      </div>

      <div class="stat-value accent-purple">{{ totalQuestions }}</div>
      <div class="stat-label">Hozirgi savollar</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTestStore } from '@/stores/test'

const testStore = useTestStore()

const totalTests = computed(() => testStore.testHistory.length)

const averageScore = computed(() => {
  if (!testStore.testHistory.length) return 0
  const total = testStore.testHistory.reduce((sum, item) => sum + item.pct, 0)
  return Math.round(total / testStore.testHistory.length)
})

const bestScore = computed(() => {
  if (!testStore.testHistory.length) return 0
  return Math.max(...testStore.testHistory.map(item => item.pct))
})

const totalQuestions = computed(() => testStore.questions.length)
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  margin-bottom: 30px;
}

.stat-card {
  padding: 24px;
  min-height: 180px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.88));
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255,255,255,0.04);
}

.stat-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.stat-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.icon-blue {
  background: rgba(37, 99, 235, 0.18);
  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.2);
}

.icon-sky {
  background: rgba(14, 165, 233, 0.18);
  box-shadow: 0 8px 22px rgba(14, 165, 233, 0.2);
}

.icon-gold {
  background: rgba(245, 158, 11, 0.18);
  box-shadow: 0 8px 22px rgba(245, 158, 11, 0.18);
}

.icon-purple {
  background: rgba(168, 85, 247, 0.18);
  box-shadow: 0 8px 22px rgba(168, 85, 247, 0.18);
}

.stat-badge {
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.stat-value {
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1;
  font-weight: 800;
  margin-bottom: 12px;
  color: #fff;
}

.accent-sky {
  color: #38bdf8;
}

.accent-gold {
  color: #fbbf24;
}

.accent-purple {
  color: #a78bfa;
}

.stat-label {
  font-size: 15px;
  line-height: 1.5;
  color: var(--muted);
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-card {
    min-height: auto;
    padding: 20px;
  }

  .stat-top {
    margin-bottom: 18px;
  }

  .stat-value {
    margin-bottom: 8px;
  }
}
</style>