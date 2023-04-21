import Java from '../views/Info/java.vue';
import javatwo from '../views/Info/java2.vue';
import Esinfo from '../views/Info/esinfo.vue';
export const routes = [
    {
        path: '/java2',
        name: 'Java errori',
        component: javatwo
    },
    {
        path: '/java',
        name: 'Java',
        component: Java

    },
    {
        path: '/esinfo',
        name: 'Esinfo',
        component: Esinfo
    },
]

