<script setup>
import HeaderPart from './components/layouts/HeaderPart.vue'

import DesignsPart from './components/DesignsPart.vue'
import AboutMePart from './components/AboutMePart.vue'
import OfferPart from './components/OfferPart.vue'
import SkillsPart from './components/SkillsPart.vue'
import ContactPart from './components/ContactPart.vue'
</script>
<template>
  <body>
    <header-part />

    <main>
      <about-me-part />

      <offer-part />

      <designs-part />

      <skills-part />

      <!-- <projects-part /> -->

      <contact-part />
    </main>
  </body>
</template>
