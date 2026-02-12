<script setup>
import { softList } from '@/js/softList'
</script>
<template>
  <div class="bg-[var(--bg2)]">
    <section id="education" class="wrapper">
      <h3>Outils</h3>
      <p class="mb-14 text-left md:text-center">
        Je travaille avec des outils modernes et éprouvés, choisis pour leur fiabilité et leurs
        performances.
      </p>

      <div class="soft-container mb-10">
        <div v-for="soft in softList" :key="soft.tech">
          <a :href="soft.url" target="blank" class="soft">
            <img class="soft-logo" :src="soft.logo" alt="" />
            <p class="soft-name">{{ soft.tech }}</p>
          </a>
        </div>
      </div>
    </section>
  </div>
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
  transition: 0.2s ease-in;
}
.soft-name {
  @apply text-sm md:text-base text-center italic;
}

.soft-logo {
  @apply h-12 sm:h-16 md:h-20;
}
</style>
