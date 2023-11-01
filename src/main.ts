import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import {vFocus} from './shared/directives/vFocus';
import {routes} from "@/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 700,
            }
        } else {
            return  {
                top: 0,
            }
        }
    },
});

const app = createApp(App);
app.directive('focus', vFocus);
app.use(router);
app.mount('#app');
