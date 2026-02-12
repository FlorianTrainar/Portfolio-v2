<script setup>
import StartButton from './ui/StartButton.vue'
</script>
<template>
  <section class="wrapper">
    <!-- H1 -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-space-grotesk">Développeur Web <span>Vue.js</span></h1>
    </div>

    <div class="flex flex-col md:flex-row items-start gap-16">
      <!-- COLONNE OFFRE -->
      <div class="flex-2 max-w-xl">
        <div class="flex flex-col gap-4 mb-8">
          <h4>
            Je conçois des applications et sites web <span>modernes</span> et
            <span>performants</span>, pensés pour <span>évoluer</span> avec votre activité.
          </h4>

          <h4>
            J’accompagne indépendants et petites structures dans la création de solutions
            <span>sur mesure</span>, adaptées à vos enjeux et à vos contraintes de budget et de
            délais.
          </h4>
        </div>

        <StartButton> Discutons de votre projet </StartButton>
      </div>

      <!-- COLONNE IDENTITÉ -->
      <div class="flex-1 flex flex-col items-center relative">
        <!-- PHOTO -->
        <div class="relative">
          <img
            src="../assets/imgs/profile2.png"
            class="w-80 scale-110 object-contain saturate-80 contrast-95 brightness-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] grayscale-[10%]"
          />
        </div>

        <!-- SOCLE -->
        <div
          class="mt-2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-center shadow-sm shadow-black"
        >
          <h2 class="text-2xl font-medium">Florian Trainar</h2>
          <h2 class="text-xl font-medium opacity-60">Développeur Web Freelance</h2>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
