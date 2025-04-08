<template>
  <div>
    <Hero />
    <About />
    <ProductList />
    
    <!-- Mostrar cantidad de productos en el carrito -->
    <div class="text-center mt-6">
      <router-link to="/cart" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        🛒 Carrito ({{ cartStore.cartItems.length }})
      </router-link>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/views/About.vue';
import ProductList from '@/components/ProductList.vue';
import { useCartStore } from '@/stores/cartStore';

export default {
  name: 'HomeView',
  components: { Hero, About, ProductList },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  }
}
</script>