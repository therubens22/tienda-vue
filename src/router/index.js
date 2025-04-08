import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Cart from '@/views/Cart.vue';
import About from '@/views/About.vue';
import Checkout from '@/views/Checkout.vue'; // si tenés

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/about', name: 'About', component: About },
  { path: '/checkout', name: 'Checkout', component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
