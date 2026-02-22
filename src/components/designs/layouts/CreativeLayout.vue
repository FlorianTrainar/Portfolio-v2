<script setup>
defineProps({
  theme: Object,
  title: String,
  themeChanging: Boolean,
})

const emit = defineEmits(['update:title'])
</script>

<template>
  <div class="wrapper-trans h-full flex flex-col" :class="[theme.bg, theme.text]">
    <!-- Header -->
    <header
      class="wrapper-trans flex items-center justify-between px-4 md:px-8 py-2 sm:py-4 md:py-6"
      :class="[theme.headerBg, themeChanging && 'header-changing']"
    >
      <div class="flex items-center">
        <img v-if="theme.logo" :src="theme.logo" alt="Logo" class="h-8 sm:h12 md:h-16" />
      </div>

      <nav class="theme-trans flex gap-3 md:gap-8 md:text-lg font-medium">
        <button :class="theme.navText">Projets</button>
        <button :class="theme.navText">Studio</button>
        <button :class="theme.navText">Contact</button>
      </nav>
    </header>

    <!-- Hero -->
    <main class="flex-1 flex flex-col items-center justify-center text-center px-6 mb-10">
      <!-- Titre  -->
      <textarea
        :value="title"
        @input="emit('update:title', $event.target.value)"
        rows="2"
        class="theme-trans w-full max-w-4xl bg-transparent resize-none outline-none text-center leading-tight font-semibold text-4xl sm:text-5xl md:text-6xl placeholder:opacity-50"
        :class="[theme.title, themeChanging && 'theme-changing']"
      />

      <!-- Accroche -->
      <p class="theme-trans mt-4 max-w-2xl text-sm sm:text-base sm:text-lg" :class="theme.textSoft">
        Une experience digitale impactante et originale, pensée pour raconter votre histoire et
        donner du sens à votre présence en ligne.
      </p>

      <!-- CTA -->
      <button
        class="btn-trans font-poppins font-semibold md:text-xl mt-12 px-4 md:px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0"
        :class="[theme.button, themeChanging && 'theme-changing']"
      >
        Découvrir l’univers
      </button>
    </main>
  </div>
</template>
<style scoped></style>
