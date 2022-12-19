import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//axios for API requests
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'

//fontawesome icons
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faWind } from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faWind)
library.add(faSun)
library.add(faMoon)


const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
