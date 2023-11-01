import type { RouteRecordRaw } from "vue-router";
import PageB from "@/PageB.vue";
import PageA from "@/PageA.vue";


export const routes : RouteRecordRaw[] = [
    {
        path: '/',
        component: PageA,
    },
    {
        path: '/a',
        component: PageA,
    },
    {
        path: '/b/:userId?',
        component: PageB,
        children: [
            {
                path: 'b1',
                name: 'b111',
                component: () => import('@/PageB1.vue'),
                beforeEnter: ((to, from) => {
                    console.log(from, to);
                }),
            },
            {
                path: 'b2',
                name: 'b222',
                component: () => import('@/PageB2.vue'),
            },
        ],
    },
];