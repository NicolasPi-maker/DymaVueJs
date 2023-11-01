import type { RouteRecordRaw } from "vue-router";

export const routes : RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./App.vue'),
    },
    {
        path: '/a',
        name: 'a',
        component: () => import('./PageA.vue'),
    },
    {
        path: '/a/:userId?',
        name: 'a',
        component: () => import('./PageA.vue'),
    },
    {
        path: '/b',
        name: 'b',
        component: () => import('./PageB.vue'),
    }
];