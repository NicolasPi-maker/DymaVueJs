import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Button from "primevue/button";

const app = createApp(App);
app.component('Button', Button);
app.mount('#app');
