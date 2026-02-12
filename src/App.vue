<script setup>
import DesignsPart from './components/DesignsPart.vue'
import AboutMePart from './components/AboutMePart.vue'
import OfferPart from './components/OfferPart.vue'
import SkillsPart from './components/SkillsPart.vue'
import ContactPart from './components/ContactPart.vue'
</script>
<template>
  <body>
    <header class="border-b border-slate-600 sticky top-0 z-10 bg-slate-950/70 backdrop-blur-lg">
      <nav class="wrapper h-[80px] flex items-center justify-between px-4 md:px-10">
        <a href="#about-me" class="header-nav">Accueil</a>
        <a href="#offer" class="header-nav">Offre</a>
        <a href="#designs" class="header-nav">Designs</a>

        <a href="#education" class="header-nav">Outils</a>

        <!-- <a href="#projects" class="header-nav">Projets</a> -->
        <a href="#contacts" class="header-nav">Contact</a>
      </nav>
    </header>
    <main>
      <about-me-part />

      <offer-part />

      <designs-part />

      <skills-part />

      <!-- <projects-part /> -->

      <contact-part />
    </main>

    <footer class="h-[200px] flex flex-col justify-center items-center">
      <p class="font-jet-brains font-bold text-lg">Florian Trainar</p>
      <p class="font-jet-brains text-slate-400">Développeur Web Freelance</p>
    </footer>
  </body>
</template>
<style scoped>
.header-nav {
  @apply font-space-grotesk text-[var(--high2)] font-bold text-lg sm:text-xl md:text-2xl flex justify-center items-center

  relative transition-colors duration-300 ease-out hover:text-[var(--high1)] 
  
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--high1)] after:transition-all after:duration-300 after:ease-out hover:after:w-full;
}
</style>
