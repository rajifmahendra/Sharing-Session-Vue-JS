import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Navbar from './components/Navbar.vue'

const app = createApp(App)
app.component('Navbar', Navbar);
app.use(VueSmoothScroll)
app.mount('#app')
