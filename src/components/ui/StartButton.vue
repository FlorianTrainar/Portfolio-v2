<template>
  <div class="flex justify-center">
    <button>
      <slot />
    </button>
  </div>
</template>

<style scoped>
button {
  @apply relative overflow-hidden
    font-space-grotesk font-bold text-lg sm:text-xl
    border border-sky-100/50
    bg-sky-600/50 text-sky-100
    rounded-xl py-2 px-4 mt-10
    transition-all duration-300 ease-out;
}
button:hover {
  @apply bg-emerald-600 text-emerald-50 border-emerald-100/50 scale-110 -translate-y-0.5;
}
button:active {
  @apply translate-y-1 bg-emerald-600/50;
}

button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.25), transparent 70%);
  transform: translateX(-100%);
  transition: transform 500ms ease-out;
}

button:hover::after {
  transform: translateX(100%);
}
</style>
