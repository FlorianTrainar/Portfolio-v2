<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref(null)

const handleScroll = () => {
  const header = document.querySelector('header')
  const headerBottom = header.getBoundingClientRect().bottom

  const sections = document.querySelectorAll('[id]')
  let currentSection = null

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()

    if (rect.top <= headerBottom) {
      currentSection = section.id
    }
  })

  // 🔥 NOUVEAU : si on est tout en bas de la page
  const scrollBottom = window.innerHeight + window.scrollY
  const documentHeight = document.documentElement.scrollHeight

  if (scrollBottom >= documentHeight - 5) {
    activeSection.value = 'contacts'
    return
  }

  activeSection.value = currentSection
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="border-b border-slate-600 sticky top-0 z-50 bg-slate-950/70 backdrop-blur-lg">
    <nav class="wrapper h-[80px] flex items-center justify-between px-4 md:px-10">
      <a href="#about-me" class="header-nav" :class="{ active: activeSection === 'about-me' }"
        >Accueil</a
      >
      <a href="#offer" class="header-nav" :class="{ active: activeSection === 'offer' }">Offre</a>
      <a href="#designs" class="header-nav" :class="{ active: activeSection === 'designs' }"
        >Designs</a
      >

      <a href="#education" class="header-nav" :class="{ active: activeSection === 'education' }"
        >Outils</a
      >

      <!-- <a href="#projects" class="header-nav">Projets</a> -->
      <a href="#contacts" class="header-nav" :class="{ active: activeSection === 'contacts' }"
        >Contact</a
      >
    </nav>
  </header>
</template>

<style scoped>
.header-nav {
  @apply font-space-grotesk text-slate-200 font-bold text-lg sm:text-xl md:text-2xl flex justify-center items-center

  relative transition-colors duration-300 ease-out hover:text-[var(--high2)] 
  
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--high2)] after:transition-all after:duration-300 after:ease-out hover:after:w-full;
}

.header-nav.active {
  @apply text-[var(--high2)];
}

.header-nav.active::after {
  width: 100%;
}
</style>
