<template>
  <div class="test-layout">
    <div class="container" style="max-width: 760px;">
      <div class="test-progress-bar">
        <div class="prog-info">
          <span class="prog-label">
            {{ testStore.studentName || 'O‘quvchi' }} · Savol {{ testStore.currentQ + 1 }} / {{ testStore.questions.length }}
          </span>
          <span class="prog-count">
            {{ testStore.answeredCount }}/{{ testStore.questions.length }} javob berilgan
          </span>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill"
            :style="{ width: ((testStore.currentQ + 1) / testStore.questions.length * 100) + '%' }"
          ></div>
        </div>
      </div>

      <div class="glass-card question-card" v-if="currentQuestion">
        <div class="q-category">
          <span class="badge blue">Savol {{ testStore.currentQ + 1 }}</span>
        </div>

        <div class="q-heading">{{ currentQuestion.question }}</div>

        <div class="answer-area">
          <textarea
            class="input-field answer-textarea"
            :value="testStore.studentAnswers[testStore.currentQ]"
            @input="updateAnswer"
            placeholder="Javobingizni shu yerga yozing…"
            rows="5"
          ></textarea>

          <div class="char-count">
            {{ (testStore.studentAnswers[testStore.currentQ] || '').length }} belgi
          </div>
        </div>
      </div>

      <div class="nav-controls">
        <button class="btn btn-ghost" :disabled="testStore.currentQ === 0" @click="testStore.prevQ()">
          ← Oldingi
        </button>

        <div class="q-dots">
          <button
            v-for="(_, i) in testStore.questions"
            :key="i"
            class="q-dot"
            :class="{ answered: testStore.studentAnswers[i]?.trim(), current: i === testStore.currentQ }"
            @click="testStore.jumpTo(i)"
          ></button>
        </div>

        <button
          v-if="testStore.currentQ < testStore.questions.length - 1"
          class="btn btn-secondary"
          @click="testStore.nextQ()"
        >
          Keyingi →
        </button>

        <button
          v-else
          class="btn btn-accent"
          @click="submitTest"
        >
          Testni topshirish ✓
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useTestStore } from '@/stores/test'
import { evaluateAnswers } from '@/services/aiEvaluator'

const router = useRouter()
const appStore = useAppStore()
const testStore = useTestStore()

const currentQuestion = computed(() => testStore.questions[testStore.currentQ])

function updateAnswer(e) {
  testStore.setAnswer(testStore.currentQ, e.target.value)
}

async function submitTest() {
  if (!appStore.apiKey) {
    appStore.openApiModal()
    return
  }

  const unanswered = testStore.studentAnswers.filter(a => !a || !a.trim()).length
  if (unanswered > 0 && !confirm(`${unanswered} ta savol javobsiz. Baribir topshirasizmi?`)) {
    return
  }

  try {
    appStore.setLoading(true, 'AI javoblarni baholamoqda…')

    const evaluations = await evaluateAnswers(
      testStore.questions,
      testStore.studentAnswers,
      appStore.apiKey
    )

    testStore.setEvaluations(evaluations)
    testStore.saveHistory()

    router.push('/result')
  } catch (e) {
    appStore.addToast('Baholashda xatolik: ' + e.message, 'error')
  } finally {
    appStore.setLoading(false)
  }
}
</script>