import { createApp } from 'vue'
 import vueAwesomeSidebar from 'vue-awesome-sidebar'
 import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
import App from './App.vue'
import "./assets/main.css"
import router from './routes.js'
//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
const app = createApp(App)

app.use(router)
app.use(vueAwesomeSidebar)
app.use(vuetify)

app.mount("#app")