import { createRouter, createWebHistory } from 'vue-router'

import Hamburguesas from '../views/hamburguesas.vue'
import Perros from '../views/perros.vue'
import Pizzas from '../views/pizzas.vue'
import Bebidas from '../views/bebidas.vue'
import Postres from '../views/postres.vue'
import Promociones from '../views/promociones.vue'
import Nosotros from '../views/nosotros.vue'

const routes = [
    { path: '/', redirect: '/hamburguesas' },
    { path: '/hamburguesas', component: Hamburguesas },
    { path: '/perros', component: Perros },
    { path: '/pizzas', component: Pizzas },
    { path: '/bebidas', component: Bebidas },
    { path: '/postres', component: Postres },
    { path: '/promociones', component: Promociones },
    { path: '/nosotros', component: Nosotros },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router