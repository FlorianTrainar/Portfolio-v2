<script setup>
import { ref } from 'vue'
import { projectList, techList, techFuturList } from './js/projectList'

const track = ref(null)

const projectScroll = (dir) => {
  if (dir === 'left') {
    if (track.value <= 5) {
      track.value.scrollTo({ left: track.value.clientWidth, behaviour: 'smooth' })
    } else {
      track.value.scrollBy({ left: -track.value.clientWidth })
    }
  } else if (dir === 'right') {
    track.value.scrollBy({ left: track.value.clientWidth, behaviour: 'smooth' })
  }
}
</script>
<template>
  <body>
    <header class="wrapper">
      <nav>
        <a href="#about-me">Profil</a>
        <a href="#education">Skills</a>
        <a href="#projects">Projets</a>
        <a href="#contacts">Contact</a>
      </nav>
    </header>
    <main class="wrapper">
      <section id="about-me">
        <div class="profil">
          <img class="avatar" src="./img/coucou.webp" alt="" />
          <div>
            <h1>Florian Trainar</h1>
            <h2 class="big-title">Developpeur Web / Web mobile</h2>
            <h2 class="small-title">Dev Web / Mobile</h2>
            <h2>Paris</h2>
          </div>
        </div>
        <h3>Profil</h3>
        <p>
          Passionné d'informatique et de multimedia depuis ma plus tendre enfance, j'ai récemment
          décidé d'entamer une reconversion afin de transformer cet interet en métier.
        </p>
        <p>
          Ayant effectué la formation de
          <a
            href="https://www.lereacteur.io/cours-informatique/formation-developpeur-web/"
            target="_blank"
            >Développeur Web et Web Mobile</a
          >
          au <a href="https://www.lereacteur.io/" target="_blank">Réacteur</a>, j'envisage désormais
          d'approfondir mes connaissances et de poursuivre mon parcours en obtenant le titre de
          <a
            href="https://www.lereacteur.io/formation-alternance/concepteur-developpeur-applications/"
            target="_blank"
            >Concepteur Développeur d'Applications</a
          >
        </p>
        <p>
          Animé d'une curiosité constante et d'une bonne culture technologique, j'ambitionne
          aujourd'hui de mettre mon travail, ma détermination et mon envie insatiable d'apprendre au
          service de projets numériques diverses et innovants.
        </p>
      </section>

      <section id="education">
        <h3>Compétences</h3>
        <p>
          A l'occasion de ma formation, j'ai eu l'occasion de prendre en main et d'expérimenter
          diverses outils de développement tel que :
        </p>
        <div>
          <div v-for="tech in techList" :key="tech.tech">
            <p>{{ tech.tech }}</p>
            <img :src="tech.logo" alt="" />
          </div>
        </div>
        <p>
          J'envisage désormais de poursuivre mon apprentissage et de developper mes compétences au
          travers de nouvelles tecnologies comme :
        </p>
        <div>
          <div v-for="tech in techFuturList" :key="tech.tech">
            <p>{{ tech.tech }}</p>
            <img :src="tech.logo" alt="" />
          </div>
        </div>
      </section>

      <section id="projects">
        <h3>Projets</h3>
        <p>Voici quelques-un de mes projets, réalisés avec amour :</p>
        <div>
          <button @click="projectScroll('left')">
            <font-awesome-icon :icon="['fas', 'caret-left']" />
          </button>
          <div class="carrousel" ref="track">
            <div class="slide" v-for="project in projectList" :key="project.id">
              <div>
                <div class="titleZone">
                  <div>
                    <h3>
                      {{ project.title }}
                    </h3>
                    <h4>{{ project.type }}</h4>
                  </div>
                  <a :href="project.url" target="_blank">
                    <font-awesome-icon :icon="['fas', 'external-link-square-alt']"
                  /></a>
                </div>
                <img :src="project.picture.url" />
              </div>
              <div>
                <ul>
                  <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
          <button @click="projectScroll('right')">
            <font-awesome-icon :icon="['fas', 'caret-right']" />
          </button>
        </div>
      </section>

      <section id="contacts">
        <h3>Contact</h3>
        <div>
          <div class="details">
            <div>
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <p>florian.trainar@hotmail.fr</p>
            </div>
            <div>
              <img src="./img/logo-github.png" />
              <a href="https://github.com/FlorianTrainar" target="_blank"
                >github.com/FlorianTrainar</a
              >
            </div>
          </div>
          <div class="goodbye">
            <img src="./img/coucou2.webp" alt="" />
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>Florian Trainar</p>
      <p>Developpeur Web / Web Modible</p>
    </footer>
  </body>
</template>
<style scoped></style>
