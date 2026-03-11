<template>
  <footer class="footer">
    <div class="container footer-inner">

      <div class="footer-left">
        <div class="footer-logo">
          🤖 EduAI
        </div>

        <p class="footer-text">
          Sun’iy intellekt yordamida testlarni avtomatik
          baholash platformasi.
        </p>
      </div>

      <div class="footer-right">
        <router-link to="/">Bosh sahifa</router-link>
        <router-link to="/upload">Test</router-link>
        <router-link to="/admin">Dashboard</router-link>
      </div>

    </div>

    <div class="footer-bottom">
      © {{ year }} EduAI platformasi
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>

.footer{
margin-top:80px;
border-top:1px solid rgba(148,163,184,0.12);
padding:40px 0;
background:rgba(15,23,42,0.8);
}

.footer-inner{
display:flex;
justify-content:space-between;
gap:40px;
flex-wrap:wrap;
}

.footer-logo{
font-size:20px;
font-weight:800;
margin-bottom:10px;
}

.footer-text{
color:var(--muted);
max-width:300px;
}

.footer-right{
display:flex;
flex-direction:column;
gap:10px;
}

.footer-right a{
text-decoration:none;
color:var(--muted);
}

.footer-right a:hover{
color:white;
}

.footer-bottom{
text-align:center;
margin-top:30px;
color:var(--muted);
font-size:14px;
}

</style>