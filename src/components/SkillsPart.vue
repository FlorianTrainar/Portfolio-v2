<script setup>
import { mainTools, supportTools } from '@/js/toolsList'
import SectionBackground from './layouts/SectionBackground.vue'
</script>
<template>
  <SectionBackground id="education" class="scroll-mt-20" bg="bg-2" halo-position="left">
    <section class="wrapper">
      <h3>Outils</h3>

      <!-- Main -->
      <div class="flex flex-col gap-8 text-center mb-10">
        <div>
          <p class="text-lg md:text-xl">
            Je conçois mes projets sur une base technique moderne, fiable et évolutive.
          </p>
          <p class="opacity-70 mt-2">
            <span>L’objectif</span> : commencer efficacement aujourd’hui, sans limiter les
            évolutions de demain.
          </p>
        </div>

        <div>
          <p>
            <a class="soft-link" href="https://vuejs.org/" target="_blank">Vue.js</a> permet de
            développer des interfaces rapides et maintenables.
          </p>
          <p>
            <a class="soft-link" href="https://firebase.google.com/" target="_blank">Firebase</a>
            assure une gestion sécurisée des données et des utilisateurs.
          </p>
          <p>
            <a class="soft-link" href="https://www.netlify.com/" target="_blank">Netlify</a>
            garantit un déploiement optimisé et une infrastructure stable.
          </p>
        </div>
        <div class="flex items-center justify-center flex-wrap md:gap-5 lg:gap-10">
          <div v-for="tool in mainTools" :key="tool.tech">
            <a
              :href="tool.url"
              target="_blank"
              class="group relative flex flex-col items-center w-24 gap-3 transition-all duration-300"
            >
              <!-- Halo -->
              <div
                class="absolute z-50 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"
              ></div>

              <!-- Logo -->
              <img
                class="relative z-10 h-8 md:h-12 transition-all duration-300 group-hover:scale-110"
                :src="tool.logo"
                alt=""
              />

              <p
                class="text-sm md:text-base text-center transition-colors duration-300 group-hover:text-[var(--high2)]"
              >
                {{ tool.tech }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <!-- Supports -->
      <div class="max-w-2xl mx-auto text-center mb-14">
        <p class="text-lg md:text-xl">
          Selon vos besoins, votre projet peut évoluer vers des fonctionnalités plus avancées :
        </p>
        <p class="opacity-70 mt-2">
          Paiement en ligne, accès membres, contenus protégés ou intégrations tierces...
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="tool in supportTools"
          :key="tool.tech"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:cursor-pointer hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(241,171,51,0.15)]"
        >
          <h4 class="text-lg font-semibold mb-3 text-[var(--high2)]">
            {{ tool.title }}
          </h4>

          <p class="text-sm opacity-80 mb-6 leading-relaxed">
            {{ tool.description }}
          </p>

          <a
            :href="tool.url"
            target="_blank"
            class="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition"
          >
            <img :src="tool.logo" class="h-8" alt="" />
            <span class="text-sm tracking-wide">{{ tool.tech }}</span>
          </a>
        </div>
      </div>
    </section>
  </SectionBackground>
</template>
<style scoped>
.soft-link {
  @apply text-[var(--high1)] hover:cursor-pointer hover:text-[var(--high2)] transition-colors duration-300;
}
</style>
