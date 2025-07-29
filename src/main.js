import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import i18n from "./i18n";
import { PiniaCookiesPlugin } from './plugins/pinia-cookies';
import { createPinia } from 'pinia';
import axios from 'axios'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

axios.defaults.baseURL = "";
const pinia = createPinia();
pinia.use(PiniaCookiesPlugin);

AOS.init({
  duration: 1200,
  once: false,
  mirror: true,
  throttleDelay: 100,
  debounceDelay: 50,
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.config.devtools = false;
app.mount('#app');

window.AOS = AOS;