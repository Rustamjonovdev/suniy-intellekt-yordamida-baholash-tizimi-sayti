import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => ({
    questions: [],
    studentAnswers: [],
    evaluations: [],
    currentQ: 0,
    studentName: '',
    testHistory: JSON.parse(localStorage.getItem('eduai_history') || '[]'),
  }),

  getters: {
    answeredCount: (state) =>
      state.studentAnswers.filter(a => a && a.trim()).length,

    scoreData: (state) => {
      if (!state.evaluations.length) return null

      const correct = state.evaluations.filter(e => e.correct).length
      const total = state.questions.length
      const pct = total ? Math.round((correct / total) * 100) : 0

      return {
        correct,
        wrong: total - correct,
        total,
        pct,
      }
    },

    scoreClass() {
      if (!this.scoreData) return ''
      const p = this.scoreData.pct

      if (p >= 85) return 'excellent'
      if (p >= 70) return 'good'
      if (p >= 50) return 'average'
      return 'poor'
    },

    gradeLabel() {
      if (!this.scoreData) return ''
      const p = this.scoreData.pct

      if (p >= 90) return '🏆 Juda zo‘r natija!'
      if (p >= 80) return '⭐ A’lo ish!'
      if (p >= 70) return '✅ Yaxshi!'
      if (p >= 60) return '📚 Ko‘proq mashq qiling!'
      if (p >= 50) return '💪 Yanada yaxshilash mumkin!'
      return '📖 Ko‘proq o‘rganish kerak'
    },

    ringColor() {
      if (!this.scoreData) return '#2563EB'
      const p = this.scoreData.pct
      if (p >= 85) return '#22C55E'
      if (p >= 70) return '#0EA5E9'
      if (p >= 50) return '#f59e0b'
      return '#ef4444'
    }
  },

  actions: {
    setQuestions(questions) {
      this.questions = questions
      this.studentAnswers = new Array(questions.length).fill('')
      this.evaluations = []
      this.currentQ = 0
    },

    setStudentName(name) {
      this.studentName = name
    },

    setAnswer(index, value) {
      this.studentAnswers[index] = value
    },

    setEvaluations(evaluations) {
      this.evaluations = evaluations
    },

    nextQ() {
      if (this.currentQ < this.questions.length - 1) {
        this.currentQ++
      }
    },

    prevQ() {
      if (this.currentQ > 0) {
        this.currentQ--
      }
    },

    jumpTo(index) {
      this.currentQ = index
    },

    retakeTest() {
      this.studentAnswers = new Array(this.questions.length).fill('')
      this.evaluations = []
      this.currentQ = 0
    },

    resetAll() {
      this.questions = []
      this.studentAnswers = []
      this.evaluations = []
      this.currentQ = 0
      this.studentName = ''
    },

    saveHistory() {
      const correct = this.evaluations.filter(e => e.correct).length
      const total = this.questions.length
      const pct = total ? Math.round((correct / total) * 100) : 0

      const entry = {
        id: Date.now(),
        name: this.studentName || 'Anonim',
        date: new Date().toLocaleDateString(),
        total,
        correct,
        pct,
      }

      this.testHistory.unshift(entry)
      this.testHistory = this.testHistory.slice(0, 20)

      localStorage.setItem('eduai_history', JSON.stringify(this.testHistory))
    },

    clearHistory() {
      this.testHistory = []
      localStorage.removeItem('eduai_history')
    }
  }
})