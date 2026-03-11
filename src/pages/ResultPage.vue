<template>
  <div v-if="testStore.scoreData" class="result-layout">
    <div class="container" style="max-width: 900px;">
      <div class="result-hero glass-card" style="padding:56px 40px; margin-bottom:32px;">
        <div class="result-score-label">Yakuniy natija</div>
        <div :class="['result-percentage', testStore.scoreClass]">
          {{ testStore.scoreData.pct }}%
        </div>
        <div class="result-grade">{{ testStore.gradeLabel }}</div>
      </div>

      <div class="stats-grid">
        <div class="stat-card total glass-card">
          <div class="num">{{ testStore.scoreData.total }}</div>
          <div class="lbl">Jami savollar</div>
        </div>
        <div class="stat-card correct glass-card">
          <div class="num">{{ testStore.scoreData.correct }}</div>
          <div class="lbl">To‘g‘ri javob</div>
        </div>
        <div class="stat-card wrong glass-card">
          <div class="num">{{ testStore.scoreData.wrong }}</div>
          <div class="lbl">Noto‘g‘ri javob</div>
        </div>
        <div class="stat-card score glass-card">
          <div class="num">{{ testStore.scoreData.pct }}%</div>
          <div class="lbl">Foiz natija</div>
        </div>
      </div>

      <div class="answers-review glass-card" style="padding:36px; margin-top:24px;">
        <div class="review-title">📝 Javoblar tahlili</div>

        <div
          v-for="(ev, i) in testStore.evaluations"
          :key="i"
          :class="['review-item', ev.correct ? 'correct' : 'incorrect']"
        >
          <div class="review-q">
            <strong>S{{ i + 1 }}:</strong> {{ testStore.questions[i].question }}
          </div>

          <div class="review-ans">
            <span style="color:var(--muted);">Sizning javobingiz:</span>
            <span style="margin-left:8px;">{{ testStore.studentAnswers[i] || '(javob yo‘q)' }}</span>
          </div>

          <div class="review-ans" v-if="testStore.questions[i].answer && !ev.correct">
            <span style="color:var(--accent);">Kutilgan:</span>
            <span style="margin-left:8px;">{{ testStore.questions[i].answer }}</span>
          </div>

          <div class="review-feedback" v-if="ev.feedback">
            💬 {{ ev.feedback }}
          </div>
        </div>
      </div>

      <div style="display:flex; gap:16px; justify-content:center; margin-top:40px; flex-wrap:wrap;">
        <button class="btn btn-primary" @click="retake">🔄 Qayta topshirish</button>
        <button class="btn btn-secondary" @click="newTest">📤 Yangi test</button>
        <button class="btn btn-ghost" @click="router.push('/admin')">📊 Dashboard</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTestStore } from '@/stores/test'

const router = useRouter()
const testStore = useTestStore()

function retake() {
  testStore.retakeTest()
  router.push('/test')
}

function newTest() {
  testStore.resetAll()
  router.push('/upload')
}
</script>