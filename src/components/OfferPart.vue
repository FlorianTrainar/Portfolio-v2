<script setup>
import StartButton from './ui/StartButton.vue'
import SectionBackground from './layouts/SectionBackground.vue'
const features = [
  {
    title: '🧑‍💼 Suivi de A à Z',
    detail:
      'Un interlocuteur unique et disponible, du premier échange à la mise en ligne de votre site.',
  },
  {
    title: '🚀 Performance & fiabilité',
    detail:
      'Des sites rapides, optimisés et fiables pour offrir une expérience fluide à vos visiteurs.',
  },
  {
    title: '🔧 Stabilité & évolutivité',
    detail:
      'Des sites construits sur une base technique solide, faciles à maintenir et à faire évoluer dans le temps.',
  },
  {
    title: '🎯 Sur-mesure & adaptabilité',
    detail:
      'Chaque projet est unique : je réponds précisément à vos besoins, sans fonctionnalités superflues.',
  },
  {
    title: '🎨 Design moderne & cohérent',
    detail:
      'Un design épuré et professionnel, pensé pour refléter votre identité et inspirer confiance à vos clients.',
  },
  {
    title: '🔐 Données et sécurité',
    detail:
      'Des bonnes pratiques mises en place pour protéger vos données et celles de vos utilisateurs, dans le respect de la confidentialité et des standards du web.',
  },

  {
    title: '💰 Tarifs transparents & compétitifs',
    detail:
      'Des prix justes, adaptés aux indépendants, avec une vision claire et détaillée des coûts dès le départ.',
  },
  {
    title: '🤝 Accompagnement & pédagogie',
    detail:
      'Un échange simple et humain, avec des explications claires à chaque étape du projet. Vous gardez le contrôle.',
  },
]
</script>
<template>
  <SectionBackground id="offer" class="scroll-mt-20" bg="bg2" haloPosition="left">
    <section class="wrapper">
      <h3>Mon offre</h3>

      <div class="flex flex-col gap-4">
        <div v-for="feature in features" :key="feature.title">
          <h5 class="text-base sm:text-xl font-bold text-[var(--high1)]">
            {{ feature.title }}
          </h5>
          <p>{{ feature.detail }}</p>
        </div>
      </div>
      <StartButton>Parlons de vos besoins</StartButton>
    </section>
  </SectionBackground>
</template>
