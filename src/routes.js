
import Home from './views/home.vue';
import Informatica from './views/Informatica.vue';
import Sistemi from './views/Sistemi.vue';
import Tpsit from './views/Tpsit.vue';
import Storia from './views/storia.vue';
import * as informatica from './sotto-routes/Informatica.js'
import { createRouter, createWebHistory } from 'vue-router';

 const routes = [...informatica.routes,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sistemi',
    name: 'sistemi',
    component: Sistemi
  },
  {
    path: '/storia',
    name: 'Storia',
    component: Storia
  },
  {
    path: '/informatica',
    name: 'informatica',
    component: Informatica
  },
  {
    path: '/tpsit',
    name: 'Tpsit',
    component: Tpsit
  }
]

  const router = createRouter({
   history: createWebHistory(),
   routes,
  })

export default router
