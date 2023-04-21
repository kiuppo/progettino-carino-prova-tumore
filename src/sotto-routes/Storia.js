import esstoria from '../views/Storia/esstoria.vue';
import Trentanni  from '../views/Storia/Trentanni.vue';
export const routes = [
    {
        path: '/esstoria',
        name: 'esstoria',
        component: esstoria
    },
    {
        path: '/Trentanni',
        name: 'Guerra dei 30 anni',
        component: Trentanni
    }
]