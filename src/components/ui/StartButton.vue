<template>
  <div class="flex justify-center">
    <a href="mailto:florian.trainar@hotmail.fr?subject=Contact%20depuis%20votre%20site">
      <slot />
    </a>
  </div>
</template>

<style scoped>
a {
  @apply relative overflow-hidden
    font-space-grotesk font-bold text-lg sm:text-xl
    border border-amber-100/50
    bg-amber-600/70 text-sky-100
    rounded-xl py-2 px-4 mt-10
    transition-all duration-300 ease-out;
}
a:hover {
  @apply bg-amber-600 text-emerald-50 border-emerald-100/50 scale-110 -translate-y-0.5;
}
a:active {
  @apply translate-y-1 bg-amber-600/50;
}

a::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.25), transparent 70%);
  transform: translateX(-100%);
  transition: transform 500ms ease-out;
}

a:hover::after {
  transform: translateX(100%);
}
</style>
