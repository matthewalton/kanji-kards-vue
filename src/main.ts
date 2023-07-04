import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App);

app.use(router)
app.mount('#app')
