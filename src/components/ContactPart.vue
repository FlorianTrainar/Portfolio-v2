<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <section id="contacts" class="wrapper">
    <h3>Contact</h3>
    <div class="flex flex-col md:flex-row-reverse items-center justify-end md:gap-10">
      <div class="flex flex-col justify-center gap-6 text-xl mb-10">
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
          <a class="link" href="https://github.com/FlorianTrainar" target="_blank"
            >github.com/FlorianTrainar</a
          >
        </div>
      </div>
    </div>
  </section>
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
  @apply relative font-space-grotesk font-bold text-xl text-[var(--high2)]
    transition-all duration-300 ease-out;
}

/* underline animé */
.link::after {
  content: '';
  @apply absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left
    bg-[var(--high1)] transition-transform duration-300 ease-out;
}

/* hover icon */
.group:hover .icon {
  @apply text-[var(--high1)] -translate-x-1 scale-125;
}

/* hover texte */
.group:hover .link {
  @apply text-[var(--high1)] translate-x-1;
}

.group:hover .link::after {
  @apply scale-x-100;
}
</style>
