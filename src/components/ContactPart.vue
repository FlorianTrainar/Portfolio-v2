<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SectionBackground from './layouts/SectionBackground.vue'
import FooterPart from './layouts/FooterPart.vue'
import StartButton from './ui/StartButton.vue'
</script>
<template>
  <SectionBackground id="contacts" class="scroll-mt-20" bg="bg1" haloPosition="right">
    <section class="wrapper">
      <!-- Titre -->
      <h3>Contact</h3>

      <div class="flex flex-col gap-4 mt-20">
        <!-- Accroche -->
        <div class="max-w-2xl mx-auto text-center flex flex-col gap-3">
          <p class="text-lg md:text-xl">
            Je vous accompagne dans la conception d’une solution moderne, performante et évolutive.
          </p>

          <p class="opacity-70">Disponible pour missions freelance et collaborations startup.</p>
        </div>

        <div class="flex flex-col items-center gap-3">
          <StartButton>Discutons de votre projet</StartButton>
          <p class="opacity-70">Réponse sous 24 à 48h ouvrées.</p>
        </div>

        <!-- Bloc central -->
        <div class="flex flex-col items-center mt-12">
          <!-- Colonne contact -->
          <div class="flex flex-col items-center gap-4 text-xl">
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
  @apply relative font-space-grotesk font-bold text-lg text-[var(--high1)]
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
