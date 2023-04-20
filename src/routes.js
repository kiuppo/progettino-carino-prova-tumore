
import Home from './views/home.vue';

import Gabibbo from './views/gabibbo.vue'
import * as informatica from './sotto-routes/Informatica.js'
import * as Sistemipath from './sotto-routes/Sistemi.js'
import { createRouter, createWebHistory } from 'vue-router';

 const routes = [...informatica.routes,...Sistemipath.routes,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/gabibbo',
    name: 'gabibbo',
    component: Gabibbo
  },
]

  const router = createRouter({
   history: createWebHistory(),
   routes,
  })

export default router
