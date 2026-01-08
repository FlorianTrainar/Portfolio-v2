<script setup>
import { techList, techFuturList } from '../js/projectList'
</script>
<template>
  <section id="education">
    <h3>Compétences</h3>
    <p class="mb-14 text-left md:text-center">
      Mon parcours m’a permis de me familiariser et d’expérimenter divers outils de développement,
      tels que :
    </p>

    <div class="soft-container mb-10">
      <div class="soft" v-for="tech in techList" :key="tech.tech">
        <img class="soft-logo" :src="tech.logo" alt="" />
        <p class="soft-name">{{ tech.tech }}</p>
      </div>
    </div>

    <p class="mb-14 text-left md:text-center">
      Je poursuis actuellement mon apprentissage afin de développer mes compétences à travers de
      nouvelles technologies, comme :
    </p>

    <div class="soft-container">
      <div class="soft" v-for="tech in techFuturList" :key="tech.tech">
        <p class="soft-name">{{ tech.tech }}</p>
        <img class="soft-logo" :src="tech.logo" alt="" />
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Skills */

.soft-container {
  @apply flex items-center justify-center flex-wrap md:gap-5 lg:gap-10;
}
.soft {
  @apply flex flex-col items-center w-24 mb-6 md:mb-12 gap-3;
}
.soft:hover {
  @apply scale-125 cursor-pointer;
  transition: 0.5s ease-in;
}
.soft-name {
  @apply text-sm md:text-base text-center italic;
}

.soft-logo {
  @apply h-12 sm:h-16 md:h-20;
}
</style>
