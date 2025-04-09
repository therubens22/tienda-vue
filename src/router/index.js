import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Cart from '@/views/Cart.vue';
import About from '@/views/About.vue';
import Checkout from '@/views/Checkout.vue'; // si tenés
import ComoComprar from '@/views/ComoComprar.vue'
import Envios from '@/views/Envios.vue'
import PoliticaReembolso from '@/views/PoliticaReembolso.vue'

import AllProducts from '@/views/AllProducts.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/productos', name: 'AllProducts', component: AllProducts },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/about', name: 'About', component: About },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/como-comprar', name: 'ComoComprar', component: ComoComprar },
  { path: '/envios', name: 'Envios', component: Envios },
  { path: '/politica-reembolso', name: 'PoliticaReembolso', component: PoliticaReembolso },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
