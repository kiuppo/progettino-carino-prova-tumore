 import ing1 from '../views/Inglese/inglese.vue';
 import Something from '../views/Inglese/inglese2.vue';
 import esing from '../views/Inglese/esing.vue';
export const routes = [
    {
        path: '/inglese',
      name: 'inglese',
       component: ing1
     },
     {
        path: '/inglese2',
      name: 'inglese2',
       component: Something
     },
     {
        path: '/esing',
      name: 'esing',
       component: esing
     },
 ]