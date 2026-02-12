<script setup>
import { ref, computed } from 'vue'

import ProLayout from './designs/layouts/ProLayout.vue'
import { proThemes } from './designs/themes/ProThemes'
import CreativeLayout from './designs/layouts/CreativeLayout.vue'
import { creativeThemes } from './designs/themes/CreativeThemes'
import StartButton from './ui/StartButton.vue'

const layouts = [
  {
    name: 'Professionnel',
    key: 'pro',
    component: ProLayout,
    themes: proThemes,
  },
  {
    name: 'Créatif',
    key: 'creative',
    component: CreativeLayout,
    themes: creativeThemes,
  },
]

const activeLayoutIndex = ref(0)
const activeThemeIndex = ref(0)

const isThemeChanging = ref(false)

const activeLayout = computed(() => layouts[activeLayoutIndex.value])
const activeTheme = computed(() => activeLayout.value.themes[activeThemeIndex.value])

const title = ref('Votre site, votre style')

// --- actions ---
function nextLayout() {
  activeLayoutIndex.value = (activeLayoutIndex.value + 1) % layouts.length
}

function nextTheme() {
  isThemeChanging.value = true

  setTimeout(() => {
    activeThemeIndex.value = (activeThemeIndex.value + 1) % activeLayout.value.themes.length

    isThemeChanging.value = false
  }, 150)
}
</script>

<template>
  <section id="designs" class="wrapper">
    <h3>Designs</h3>
    <div class="flex flex-col items-center mb-10">
      <h4 class="">Je m'adapte à <span>vos besoins</span></h4>
      <h4>
        Chaque design est entièrement <span>personnalisable</span> et adapté à votre activité.
      </h4>
    </div>
    <div
      class="w-full mx-auto gap-0 sm:gap-3 md:gap-8 md:w-[50%] flex justify-around items-center py-6 text-xl"
    >
      <!-- Layout button -->
      <button @click="nextLayout" class="selector-btn">
        <span class="label">Style</span>
        <span class="value">{{ activeLayout.name }}</span>
      </button>

      <!-- Theme button -->
      <button @click="nextTheme" class="selector-btn">
        <span class="label">Thème</span>
        <span class="value">{{ activeTheme.label }}</span>
      </button>
    </div>

    <div class="w-full h-[70vh] overflow-hidden bg-white rounded-xl border border-gray-200">
      <div class="p-1 bg-gray-300 rounded-t-xl border-b border-gray-400">
        <font-awesome-icon icon="circle" class="h-3 text-red-600" />
        <font-awesome-icon icon="circle" class="h-3 text-yellow-500" />
        <font-awesome-icon icon="circle" class="h-3 text-green-600" />
      </div>
      <Transition name="fade" mode="out-in">
        <component
          :is="activeLayout.component"
          :key="activeLayout.key"
          :theme="activeTheme"
          :title="title"
          :themeChanging="isThemeChanging"
          @update:title="title = $event"
        />
      </Transition>
    </div>
    <StartButton>Réalisons votre vision</StartButton>
  </section>
</template>
<style scoped>
.selector-btn {
  @apply relative
    px-6 py-2 flex-1
    flex flex-col items-center gap-1
    text-slate-300
    transition-all duration-300 ease-out;
}

/* bordures latérales */
.selector-btn::before,
.selector-btn::after {
  content: '';
  position: absolute;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: theme('colors.slate.600');
  transition: all 300ms ease;
}

.selector-btn::before {
  left: 0;
}

.selector-btn::after {
  right: 0;
}

/* hover */
.selector-btn:hover {
  @apply text-slate-100;
}

.selector-btn:hover::before,
.selector-btn:hover::after {
  top: 10%;
  bottom: 10%;
  background: theme('colors.lime.400');
}

/* textes */
.label {
  @apply font-space-grotesk text-slate-100 text-sm uppercase tracking-widest;
}

.value {
  @apply font-inter  text-sm sm:text-lg md:text-2xl font-semibold;
}

/* Animation layout */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 300ms ease,
    transform 300ms ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translatex(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translatex(-8px);
}
</style>
