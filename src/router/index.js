import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UploadPage from '@/pages/UploadPage.vue'
import TestPage from '@/pages/TestPage.vue'
import ResultPage from '@/pages/ResultPage.vue'
import AdminPage from '@/pages/AdminPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/upload', name: 'upload', component: UploadPage },
  { path: '/test', name: 'test', component: TestPage },
  { path: '/result', name: 'result', component: ResultPage },
  { path: '/admin', name: 'admin', component: AdminPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router