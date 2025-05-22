import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRight,
  faCaretLeft,
  faCaretRight,
  faEnvelope,
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
library.add(
  faExternalLinkSquareAlt,
  faArrowRight,
  faHtml5,
  faCss3,
  faJs,
  faCaretLeft,
  faCaretRight,
  faEnvelope,
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
