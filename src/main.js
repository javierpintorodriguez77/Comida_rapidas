import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Estilos de Quasar y sus iconos
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import App from './App.vue'
import router from './routes/routes.js'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {},
})

myApp.use(router)
myApp.mount('#app')