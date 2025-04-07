<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-72">
    <img :src="image" alt="Producto" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <p class="text-sm text-gray-600 mb-2">{{ description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-blue-600 font-bold">${{ price }}</span>
        <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm">Agregar</button>
      </div>
    </div>
  </div>
</template>



<script>
import { LucideShoppingCart } from 'lucide-vue-next';
import { useCartStore } from '@/stores/cartStore';

export default {
  name: 'Cart',
  components: {
    LucideShoppingCart
  },
  setup() {
    const cartStore = useCartStore();

    const checkout = () => {
      if (cartStore.cartItems.length > 0) {
        window.alert('Redirigiendo a pago...');
        cartStore.clearCart();
      }
    };

    console.log('Productos en el carrito:', cartStore.cartItems);

    return { cartStore, checkout };
  },
  mounted() {
    console.log('Cart.vue se ha montado');
  }
};
</script>
