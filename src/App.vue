<script setup>
import ProjectsPart from './components/ProjectsPart.vue'
import AboutMePart from './components/AboutMePart.vue'
import SkillsPart from './components/SkillsPart.vue'
import ContactPart from './components/ContactPart.vue'
</script>
<template>
  <body>
    <header class="border-b border-white sticky top-0 z-10 backdrop-blur-lg">
      <nav class="wrapper h-[80px] flex">
        <a href="#about-me" class="header-nav">Profil</a>
        <a href="#education" class="header-nav">Skills</a>
        <a href="#projects" class="header-nav">Projets</a>
        <a href="#contacts" class="header-nav">Contact</a>
      </nav>
    </header>
    <main class="wrapper">
      <about-me-part />

      <skills-part />

      <projects-part />

      <contact-part />
    </main>

    <footer class="h-[200px] flex flex-col justify-center items-center">
      <p class="text-gray-300 font-bold text-lg">Florian Trainar</p>
      <p class="text-gray-400">Developpeur Web / Web Modible</p>
    </footer>
  </body>
</template>
<style scoped>
.header-nav {
  @apply text-lg sm:text-xl md:text-2xl flex-1 flex justify-center items-center;
}
</style>
