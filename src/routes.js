import Home from './views/home.vue';
import Informatica from './views/Informatica.vue';
import Sistemi from './views/Sistemi.vue';
import Tpsit from './views/Tpsit.vue';

import {createRouter, createWebHistory} from 'vue-router';

const routes=[
    {path: '/', component: Home}, 
    {path: '/informatica', component: Informatica}, 
    {path: '/tpsit', component: Tpsit}, 
    {path: '/sistemi', component: Sistemi}, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;