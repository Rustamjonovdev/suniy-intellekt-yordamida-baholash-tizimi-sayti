<template>
  <div class="home-page">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="badge badge-blue hero-badge">🤖 AI Test Platform</span>

          <h1 class="hero-title">
            Sun’iy intellekt yordamida
            <span class="gradient-text">testlarni avtomatik baholash</span>
            tizimi
          </h1>

          <p class="hero-sub">
            Savollarni Excel orqali yuklang, talabalar javob yozadi,
            tizim esa ularni tezkor va aqlli tarzda baholab,
            natijalarni bir zumda ko‘rsatadi.
          </p>

          <div class="hero-actions">
            <router-link to="/upload">
              <BaseButton variant="primary" size="lg">
                🚀 Testni boshlash
              </BaseButton>
            </router-link>

            <router-link to="/admin">
              <BaseButton variant="ghost" size="lg">
                📊 Dashboard
              </BaseButton>
            </router-link>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>100%</strong>
              <span>Tezkor natija</span>
            </div>

            <div class="stat-item">
              <strong>AI</strong>
              <span>Aqlli baholash</span>
            </div>

            <div class="stat-item">
              <strong>24/7</strong>
              <span>Doimiy ishlash</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="glass-card main-card">
            <div class="hero-card-icon">🧠</div>
            <h3>AI Baholash Mexanizmi</h3>
            <p>
              Yozma javoblar mazmunan tahlil qilinadi, natijalar esa
              aniq va tushunarli ko‘rinishda taqdim etiladi.
            </p>

            <div class="mini-progress">
              <div class="mini-progress-top">
                <span>Baholash jarayoni</span>
                <span>92%</span>
              </div>

              <div class="progress-track">
                <div class="progress-fill" style="width: 92%"></div>
              </div>
            </div>
          </div>

          <div class="glass-card floating-card floating-1">
            <span>📄 Excel yuklash</span>
          </div>

          <div class="glass-card floating-card floating-2">
            <span>✅ Natija tayyor</span>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="section-head">
          <span class="badge badge-blue">Imkoniyatlar</span>
          <h2 class="section-title">Platforma imkoniyatlari</h2>
          <p class="section-sub">
            Ta’lim jarayonini tezlashtiruvchi va qulaylashtiruvchi asosiy funksiyalar
          </p>
        </div>

        <div class="features-grid">
          <div class="glass-card feature-card">
            <div class="f-icon">📂</div>
            <h3>Excel yuklash</h3>
            <p>
              Savollarni Excel yoki CSV fayl orqali yuklash imkoniyati mavjud.
            </p>
          </div>

          <div class="glass-card feature-card">
            <div class="f-icon">✍️</div>
            <h3>Yozma javoblar</h3>
            <p>
              Talabalar har bir savolga to‘liq va erkin shaklda javob yozadi.
            </p>
          </div>

          <div class="glass-card feature-card">
            <div class="f-icon">🤖</div>
            <h3>AI baholash</h3>
            <p>
              Sun’iy intellekt javoblarni tahlil qiladi va adolatli baholaydi.
            </p>
          </div>

          <div class="glass-card feature-card">
            <div class="f-icon">📊</div>
            <h3>Statistika</h3>
            <p>
              Har bir test natijasini ko‘rish, saqlash va dashboard orqali tahlil qilish mumkin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="steps">
      <div class="container">
        <div class="section-head">
          <span class="badge badge-blue">Jarayon</span>
          <h2 class="section-title">Qanday ishlaydi?</h2>
          <p class="section-sub">
            Uchta oddiy qadam orqali testlarni avtomatlashtirilgan tarzda baholang
          </p>
        </div>

        <div class="steps-grid">
          <div class="glass-card step-card">
            <div class="step-num">1</div>
            <h3>Fayl yuklanadi</h3>
            <p>
              O‘qituvchi savollarni Excel fayl orqali platformaga joylaydi.
            </p>
          </div>

          <div class="glass-card step-card">
            <div class="step-num">2</div>
            <h3>Javoblar yoziladi</h3>
            <p>
              Talaba savollarni ko‘rib chiqib, har biriga matnli javob kiritadi.
            </p>
          </div>

          <div class="glass-card step-card">
            <div class="step-num">3</div>
            <h3>AI baholaydi</h3>
            <p>
              Tizim javoblarni tekshiradi, natija va foiz ko‘rsatkichlarini chiqaradi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="glass-card cta-box">
          <span class="badge badge-green">Boshlash vaqti keldi</span>
          <h2>Test platformani hozir sinab ko‘ring</h2>
          <p>
            Bir necha soniya ichida AI yordamida savollarni yuklang,
            testni boshlang va natijani avtomatik oling.
          </p>

          <router-link to="/upload">
            <BaseButton variant="accent" size="lg">
              🚀 Test boshlash
            </BaseButton>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<style scoped>
.home-page {
  position: relative;
}

.hero {
  padding: 90px 0 70px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.hero-badge {
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, var(--secondary), var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub {
  max-width: 620px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.75;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.hero-stats {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.stat-item {
  min-width: 120px;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
}

.stat-item strong {
  display: block;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 4px;
}

.stat-item span {
  color: var(--muted);
  font-size: 13px;
}

.hero-visual {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-card {
  width: 100%;
  max-width: 420px;
  padding: 36px;
  text-align: left;
}

.hero-card-icon {
  font-size: 56px;
  margin-bottom: 14px;
}

.main-card h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.main-card p {
  color: var(--muted);
  line-height: 1.7;
}

.mini-progress {
  margin-top: 24px;
}

.mini-progress-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 14px;
}

.floating-card {
  position: absolute;
  padding: 14px 18px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(30, 41, 59, 0.9);
}

.floating-1 {
  top: 28px;
  left: 10px;
}

.floating-2 {
  right: 0;
  bottom: 35px;
}

.features,
.steps,
.cta {
  padding: 80px 0;
}

.section-head {
  text-align: center;
  margin-bottom: 40px;
}

.section-head .badge {
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  margin-bottom: 12px;
}

.section-sub {
  max-width: 640px;
  margin: 0 auto;
  color: var(--muted);
  line-height: 1.7;
}

.features-grid,
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.feature-card,
.step-card {
  padding: 30px 24px;
  text-align: center;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.feature-card:hover,
.step-card:hover {
  transform: translateY(-6px);
  border-color: rgba(37, 99, 235, 0.25);
}

.f-icon {
  font-size: 42px;
  margin-bottom: 14px;
}

.feature-card h3,
.step-card h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

.feature-card p,
.step-card p {
  color: var(--muted);
  line-height: 1.7;
}

.step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 800;
  font-size: 18px;
  box-shadow: 0 8px 20px var(--glow-blue);
}

.cta-box {
  padding: 60px 28px;
  text-align: center;
}

.cta-box .badge {
  margin-bottom: 18px;
}

.cta-box h2 {
  font-size: clamp(28px, 4vw, 42px);
  margin-bottom: 14px;
}

.cta-box p {
  max-width: 620px;
  margin: 0 auto 28px;
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 1100px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 360px;
  }

  .features-grid,
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 70px 0 40px;
  }

  .hero-sub {
    font-size: 16px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-stats {
    flex-direction: column;
  }

  .features-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .main-card {
    padding: 28px 20px;
  }

  .floating-card {
    position: static;
    margin-top: 14px;
    text-align: center;
  }

  .hero-visual {
    display: block;
    min-height: auto;
  }

  .cta-box {
    padding: 36px 20px;
  }
}
</style>