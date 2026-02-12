import logoClassic from '@/assets/logos/logo-classic.png'
import logoClassic2 from '@/assets/logos/logo-classic2.png'

export const proThemes = [
  // DEFAULT (inchangé)

  {
    name: 'default',
    label: 'Sobre',

    logo: logoClassic2,

    bg: 'bg-slate-50',
    headerBg: 'bg-white/90',
    border: 'border-slate-200',
    navText: 'text-sky-800',
    title: 'text-slate-900 font-poppins',
    text: 'text-slate-600',
    button: 'bg-sky-700 text-slate-100 hover:bg-sky-600 active:bg-sky-700',
  },

  // WARM 1 — Sable & Terracotta

  {
    name: 'warm-sand',
    label: 'Chaleureux',

    logo: logoClassic2,

    bg: 'bg-orange-50',
    headerBg: 'bg-orange-50/90',
    border: 'border-orange-200',
    navText: 'text-orange-800',
    title: 'text-orange-900 font-poppins',
    text: 'text-orange-700',
    button: 'bg-orange-600 text-white hover:bg-orange-500 active:bg-orange-600 ',
  },

  // WARM 2 — Olive & Crème

  {
    name: 'warm-olive',
    label: 'Naturel',

    logo: logoClassic2,

    bg: 'bg-lime-50',
    headerBg: 'bg-lime-50/90',
    border: 'border-lime-200',
    navText: 'text-lime-900',
    title: 'text-lime-950 font-poppins',
    text: 'text-lime-800',
    button: 'bg-lime-700 text-white hover:bg-lime-600 active:bg-lime-700',
  },

  // DARK — Night mode

  {
    name: 'dark',
    label: 'Sombre',

    logo: logoClassic,

    // Fond légèrement bleuté (différent de ton site)
    bg: 'bg-slate-800',
    headerBg: 'bg-slate-800/90',
    border: 'border-slate-600',

    // Textes
    navText: 'text-lime-300/80',
    title: 'text-slate-100 font-poppins',
    text: 'text-slate-400',

    // CTA contrasté mais élégant
    button: 'bg-lime-700 text-slate-100 hover:bg-lime-600 active:bg-lime-700',
  },
]
