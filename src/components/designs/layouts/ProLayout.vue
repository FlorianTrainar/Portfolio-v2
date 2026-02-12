<script setup>
defineProps({
  theme: Object,
  title: String,
  themeChanging: Boolean,
})

const emit = defineEmits(['update:title'])
</script>

<template>
  <div class="wrapper-trans h-full font-sans" :class="[theme.bg, theme.text]">
    <!-- Header -->
    <header
      class="theme-trans flex items-center justify-between px-6 py-4 backdrop-blur border-b"
      :class="[theme.headerBg, theme.border, themeChanging && 'header-changing']"
    >
      <div class="flex items-center gap-2">
        <img v-if="theme.logo" :src="theme.logo" alt="Logo" class="h-9 w-auto" />
        <span v-else class="font-semibold"> Votre logo </span>
      </div>

      <nav class="theme-trans flex gap-6 text-sm" :class="theme.navText">
        <button>Accueil</button>
        <button>À propos</button>
        <button>Contact</button>
        <button>Boutique</button>
        <button>Connexion</button>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main class="flex flex-col items-center text-center px-6 pt-20">
      <!-- Titre modifiable -->
      <textarea
        :value="title"
        @input="emit('update:title', $event.target.value)"
        rows="2"
        class="theme-trans w-full max-w-3xl text-3xl sm:text-4xl font-heading font-semibold text-center bg-transparent resize-none outline-none leading-tight placeholder:text-slate-400"
        :class="[theme.title, themeChanging && 'theme-changing']"
      />

      <!-- Accroche -->
      <p class="theme-trans mt-6 max-w-xl text-base sm:text-lg" :class="theme.text">
        Une présence en ligne professionnelle, pensée pour mettre en valeur votre activité et offrir
        une expérience simple et agréable à vos visiteurs.
      </p>

      <!-- CTA -->
      <button
        class="btn-trans mt-10 px-6 py-3 rounded-lg text-sm font-medium"
        :class="[theme.button, themeChanging && 'theme-changing']"
      >
        Visiter
      </button>
    </main>
  </div>
</template>
<style scoped>
button:hover {
  @apply scale-110 transform ease-in duration-100 -translate-y-0.5;
}
button:active {
  @apply translate-y-0;
}
</style>
