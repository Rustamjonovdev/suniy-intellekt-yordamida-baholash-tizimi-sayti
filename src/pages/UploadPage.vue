<template>
  <div>
    <div class="page-header">
      <div class="container">
        <span class="badge blue" style="margin-bottom:16px; display:inline-flex;">📤 O‘qituvchi paneli</span>
        <h1 class="page-title">Savollarni yuklash</h1>
        <p class="page-sub">
          Excel fayl yuklang. A ustun = Savol, B ustun = Kutilgan javob
        </p>
      </div>
    </div>

    <div class="container" style="padding-bottom: 80px;">
      <div
        class="api-section"
        v-if="!appStore.apiKey"
      >
        <div class="api-label">⚠ API kalit kerak</div>
        <p style="font-size:14px; color:var(--muted); margin-bottom:16px;">
          AI baholash uchun Anthropic API kalit zarur.
        </p>
        <button class="btn btn-secondary btn-sm" @click="appStore.openApiModal()">
          API kalitni kiritish
        </button>
      </div>

      <div
        class="glass-card"
        style="padding:28px; margin-bottom:24px;"
      >
        <div style="font-size:15px; font-weight:600; margin-bottom:12px;">
          O‘quvchi ismi
        </div>
        <input
          class="input-field"
          :value="testStore.studentName"
          @input="testStore.setStudentName($event.target.value)"
          placeholder="O‘quvchi ismini kiriting…"
          style="max-width:400px;"
        />
      </div>

      <div
        class="upload-zone"
        :class="{ 'drag-over': dragOver }"
        @dragover.prevent="dragOver = true"
        @dragleave="dragOver = false"
        @drop.prevent="handleDrop"
      >
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          class="upload-input"
          @change="onFileChange"
        />
        <div class="upload-icon">📂</div>
        <div class="upload-title">Excel faylni shu yerga tashlang</div>
        <p class="upload-hint">yoki bosib tanlang</p>
      </div>

      <div style="text-align:center; margin: 20px 0; color:var(--muted);">— yoki —</div>

      <div style="text-align:center; margin-bottom:32px;">
        <button class="btn btn-ghost" @click="loadSample">
          🎯 Namuna savollarni yuklash
        </button>
      </div>

      <div v-if="testStore.questions.length" class="questions-preview">
        <div class="preview-header">
          <div class="preview-title">📋 Savollar ko‘rinishi</div>
          <span class="badge green">{{ testStore.questions.length }} ta savol</span>
        </div>

        <div class="q-item" v-for="(q, i) in testStore.questions" :key="i">
          <div class="q-num">{{ i + 1 }}</div>
          <div>
            <div class="q-text">{{ q.question }}</div>
            <div class="q-answer" v-if="q.answer">Kutilgan: {{ q.answer }}</div>
          </div>
        </div>

        <div style="margin-top:32px; text-align:center;">
          <button class="btn btn-primary btn-lg" @click="startTest">
            🚀 Testni boshlash
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useTestStore } from '@/stores/test'
import { parseExcelFile } from '@/services/excelParser'

const router = useRouter()
const appStore = useAppStore()
const testStore = useTestStore()

const dragOver = ref(false)

async function handleFile(file) {
  if (!file) return

  try {
    appStore.setLoading(true, 'Excel fayl o‘qilmoqda…')
    const questions = await parseExcelFile(file)

    if (!questions.length) {
      appStore.addToast('Savollar topilmadi', 'error')
      return
    }

    testStore.setQuestions(questions)
    appStore.addToast(`${questions.length} ta savol yuklandi!`, 'success')
  } catch (e) {
    appStore.addToast('Faylni o‘qib bo‘lmadi: ' + e.message, 'error')
  } finally {
    appStore.setLoading(false)
  }
}

function onFileChange(e) {
  handleFile(e.target.files[0])
}

function handleDrop(e) {
  dragOver.value = false
  const file = e.dataTransfer?.files[0]
  if (file) handleFile(file)
}

function loadSample() {
  const sample = [
    { question: "Hujayraning 'energiya stansiyasi' nima?", answer: "mitoxondriya" },
    { question: "Suvning kimyoviy belgisi nima?", answer: "H2O" },
    { question: "Romeo va Julyettani kim yozgan?", answer: "William Shakespeare" }
  ]

  testStore.setQuestions(sample)
  appStore.addToast('Namuna savollar yuklandi!', 'success')
}

function startTest() {
  if (!testStore.questions.length) {
    appStore.addToast('Avval savollarni yuklang', 'error')
    return
  }

  router.push('/test')
}
</script>