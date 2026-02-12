import logoCreativeB from '@/assets/logos/logo-creative-b.png'
import logoCreativeA from '@/assets/logos/logo-creative-a.png'

export const creativeThemes = [
  // ======================
  // DEFAULT — Créatif clair
  // ======================
  {
    name: 'creative-default',
    label: 'Clair',

    logo: logoCreativeB,

    bg: 'bg-stone-50',
    headerBg: 'bg-stone-50',
    title: 'text-fuchsia-900 font-clash-display',
    text: 'text-stone-700',
    textSoft: 'text-stone-600',
    navText: 'text-stone-600 hover:text-fuchsia-700 active:text-fuchsia-800',
    button: 'bg-fuchsia-800 text-stone-50 hover:bg-fuchsia-700 active:bg-fuchsia-800',
  },

  // ======================
  // WARM — Pêche & Corail
  // ======================
  {
    name: 'creative-warm',
    label: 'Chaleureux',

    logo: logoCreativeB,

    bg: 'bg-rose-50',
    headerBg: 'bg-rose-50',
    title: 'text-rose-900 font-poppins',

    text: 'text-rose-700',
    textSoft: 'text-rose-600',
    navText: 'text-rose-700',
    button: 'bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-600',
  },

  // ======================
  // VIBRANT — Indigo & Lime
  // ======================
  {
    name: 'creative-vibrant',
    label: 'Vibrant',

    logo: logoCreativeA,

    bg: 'bg-indigo-950',
    headerBg: 'bg-indigo-950',
    title: 'text-white font-clash-display',

    text: 'text-indigo-200',
    textSoft: 'text-indigo-300',
    navText: 'text-lime-400',
    button: 'bg-lime-400 text-indigo-950 hover:bg-lime-300 active:bg-lime-600',
  },

  // ======================
  // DARK — Nuit créative
  // ======================
  {
    name: 'creative-dark',
    label: 'Sombre',

    logo: logoCreativeA,

    bg: 'bg-neutral-900',
    headerBg: 'bg-neutral-900',
    title: 'text-neutral-100 font-poppins',

    text: 'text-neutral-300',
    textSoft: 'text-neutral-400',
    navText: 'text-fuchsia-400',
    button: 'bg-fuchsia-500 text-neutral-900 hover:bg-fuchsia-400 active:bg-fuchsia-600',
  },
]
