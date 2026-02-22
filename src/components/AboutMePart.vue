<script setup>
import StartButton from './ui/StartButton.vue'
import SectionBackground from './layouts/SectionBackground.vue'
</script>
<template>
  <SectionBackground id="about-me" class="scroll-mt-20" bg="bg1" haloPosition="right">
    <section class="wrapper scroll-mt-[100px]">
      <!-- H1 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-space-grotesk">Développeur Web <span>Vue.js</span></h1>
      </div>

      <div class="flex flex-col items-center md:flex-row md:items-start gap-16">
        <!-- COLONNE OFFRE -->
        <div class="flex-2 max-w-xl">
          <div class="flex flex-col gap-4 mb-8">
            <h4>
              Je conçois des sites web <span>modernes</span> et <span>performants</span>, pensés
              pour <span>évoluer</span> avec votre activité.
            </h4>

            <h4>
              Idéal pour les indépendants et petites structures, je vous accompagne dans la création
              de solutions
              <span>sur mesure</span>, adaptées à vos enjeux et à vos contraintes de budget et de
              délais.
            </h4>
          </div>

          <StartButton> Discutons de votre projet </StartButton>
        </div>

        <!-- COLONNE IDENTITÉ -->
        <div class="flex-1 min-w-64 flex flex-col items-center">
          <!-- PHOTO -->
          <div class="relative">
            <img
              src="../assets/imgs/profile3.png"
              class="w-80 scale-110 object-contain saturate-80 contrast-95 brightness-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] grayscale-[10%]"
            />
          </div>

          <!-- SOCLE -->
          <div
            class="mt-2 bg-emerald-400/30 border border-emerald-50/50 backdrop-blur-md px-6 py-3 rounded-2xl text-center shadow-sm shadow-black"
          >
            <h2 class="text-2xl font-medium">Florian Trainar</h2>
            <h2 class="text-xl font-medium opacity-80">Développeur Web Freelance</h2>
            <h2 class="text-xl font-medium opacity-80">Paris</h2>
          </div>
        </div>
      </div>
    </section>
  </SectionBackground>
</template>
<style scoped></style>
