<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div v-if="cartStore.cartItems.length > 0" class="cart p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">
        <LucideShoppingCart size="24" class="inline-block mr-2" /> Tu Carrito
      </h2>

      <div v-for="item in cartStore.cartItems" :key="item.id" class="cart-item mb-4 flex justify-between items-center p-4 border-b border-gray-200">
        <p class="text-lg">{{ item.name }} - ${{ item.price }} (x{{ item.quantity }})</p>
        <button @click="cartStore.removeFromCart(item.id)" class="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition duration-300">
          Eliminar
        </button>
      </div>

      <p class="text-lg font-bold text-right mt-4">Total: ${{ cartStore.totalPrice }}</p>

      <button @click="checkout" class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
        Proceder al pago
      </button>
    </div>

    <!-- Mensaje centrado en la página cuando el carrito está vacío -->
    <div v-else class="min-h-screen flex items-center justify-center text-gray-500 text-xl">
      <p>El carrito está vacío</p>
    </div>

    <Footer />
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
