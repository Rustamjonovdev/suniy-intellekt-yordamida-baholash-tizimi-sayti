<template>
  <div class="admin-page">
    <section class="admin-hero">
      <div class="container">
        <div class="hero-badge badge badge-blue">📊 Tahlil paneli</div>
        <h1 class="admin-title">Admin Dashboard</h1>
        <p class="admin-sub">
          Test natijalari, o‘quvchilar ko‘rsatkichlari va umumiy statistika shu yerda jamlanadi.
        </p>
      </div>
    </section>

    <section class="admin-content">
      <div class="container">
        <DashboardCards />
        <HistoryList />
      </div>
    </section>
  </div>
</template>

<script setup>
import DashboardCards from '@/components/dashboard/DashboardCards.vue'
import HistoryList from '@/components/dashboard/HistoryList.vue'
</script>

<style scoped>
.admin-page {
  position: relative;
}

.admin-hero {
  padding: 56px 0 28px;
}

.hero-badge {
  margin-bottom: 18px;
}

.admin-title {
  font-size: clamp(42px, 7vw, 92px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 18px;
  background: linear-gradient(90deg, #ffffff, #dbeafe 55%, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.admin-sub {
  max-width: 640px;
  color: var(--muted);
  font-size: 20px;
  line-height: 1.7;
}

.admin-content {
  padding: 12px 0 80px;
}

@media (max-width: 768px) {
  .admin-hero {
    padding: 36px 0 18px;
  }

  .admin-sub {
    font-size: 16px;
  }
}
</style>