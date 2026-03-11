<template>
  <header class="navbar">
    <div class="container nav-inner">

      <router-link to="/" class="logo">
        🤖 EduAI
      </router-link>

      <nav class="nav-links">

        <router-link to="/" class="nav-link">
          Bosh sahifa
        </router-link>

        <router-link to="/upload" class="nav-link">
          Test boshlash
        </router-link>

        <router-link to="/admin" class="nav-link">
          Dashboard
        </router-link>

        <BaseButton
          variant="ghost"
          size="sm"
          @click="$emit('open-api-modal')"
        >
          🔑 API Key
        </BaseButton>

      </nav>

    </div>
  </header>
</template>

<script setup>
import BaseButton from "@/components/common/BaseButton.vue"

defineEmits(["open-api-modal"])
</script>

<style scoped>

.navbar{
position:sticky;
top:0;
z-index:100;
background:rgba(15,23,42,0.8);
backdrop-filter:blur(10px);
border-bottom:1px solid rgba(148,163,184,0.12);
}

.nav-inner{
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 0;
}

.logo{
font-weight:800;
font-size:20px;
text-decoration:none;
color:white;
}

.nav-links{
display:flex;
gap:20px;
align-items:center;
}

.nav-link{
color:var(--muted);
text-decoration:none;
font-weight:500;
}

.nav-link.router-link-active{
color:white;
}

</style>