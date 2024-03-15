import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

//import 'lightbox2/dist/css/lightbox.css'
//import 'lightbox2/dist/js/lightbox.js'
//import 'lightbox2/dist/js/lightbox-plus-jquery.js'

const app = createApp(App)

app.use(VueSweetalert2)
app.use(router)

app.mount('#app')
