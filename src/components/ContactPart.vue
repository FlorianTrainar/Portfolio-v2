<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SectionBackground from './layouts/SectionBackground.vue'
import FooterPart from './layouts/FooterPart.vue'
</script>
<template>
  <SectionBackground id="contacts" class="scroll-mt-20" bg="bg1" haloPosition="right">
    <section class="wrapper">
      <!-- Titre -->
      <h3>Parlons de votre projet</h3>

      <!-- Accroche -->
      <div class="max-w-2xl mx-auto text-center mt-6 mb-16">
        <p class="text-lg md:text-xl">
          Vous avez une idée, un besoin spécifique ou un projet en réflexion ?
        </p>
        <p class="opacity-70 mt-3">
          Je vous accompagne dans la conception d’une solution moderne, performante et évolutive.
          Discutons ensemble des prochaines étapes.
        </p>
      </div>

      <!-- Bloc central -->
      <div class="flex flex-col md:flex-row md:justify-center md:gap-20 items-center">
        <!-- Colonne contact -->
        <div class="flex flex-col justify-center gap-8 text-xl mb-10">
          <div class="link-group group">
            <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
            <a
              class="link"
              href="mailto:florian.trainar@hotmail.fr?subject=Contact%20depuis%20votre%20site"
            >
              florian.trainar@hotmail.fr
            </a>
          </div>

          <div class="link-group group">
            <font-awesome-icon :icon="['fab', 'github']" class="icon" />
            <a class="link" href="https://github.com/FlorianTrainar" target="_blank">
              github.com/FlorianTrainar
            </a>
          </div>
        </div>
      </div>

      <!-- Bloc rassurant -->
      <div class="mt-16 text-center opacity-60 text-sm">
        <p>Basé à Paris — Disponible pour missions freelance et collaborations startup.</p>
        <p class="mt-2">Réponse sous 24 à 48h ouvrées.</p>
      </div>
    </section>

    <FooterPart />
  </SectionBackground>
</template>
<style scoped>
.link-group {
  @apply flex items-center gap-3 cursor-pointer;
}

.icon {
  @apply text-3xl mr-1 text-white
    transition-all duration-300 ease-out;
}

.link {
  @apply relative font-space-grotesk font-bold text-xl text-[var(--high1)]
    transition-all duration-300 ease-out;
}

/* underline animé */
.link::after {
  content: '';
  @apply absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left
    bg-[var(--high2)] transition-transform duration-300 ease-out;
}

/* hover icon */
.group:hover .icon {
  @apply text-[var(--high2)] -translate-x-1 scale-125;
}

/* hover texte */
.group:hover .link {
  @apply text-[var(--high2)] translate-x-1;
}

.group:hover .link::after {
  @apply scale-x-100;
}
</style>
