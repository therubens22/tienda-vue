<template>
  <div class="checkout max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">Finalizar compra</h2>

    <div v-if="cartStore.cartItems.length === 0" class="text-center text-gray-500">
      No hay productos en el carrito.
    </div>

    <div v-else>
      <div v-for="item in cartStore.cartItems" :key="item.id" class="mb-2">
        <p class="text-lg">{{ item.name }} - ${{ item.price }} (x{{ item.quantity }})</p>
      </div>

      <p class="text-lg font-bold text-right mt-4">Total: ${{ cartStore.totalPrice }}</p>

      <div class="mb-4 mt-6">
        <label for="customerName" class="block text-lg font-medium text-gray-600">Nombre:</label>
        <input 
          id="customerName"
          type="text"
          v-model="customerName"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div class="mb-6">
        <label for="address" class="block text-lg font-medium text-gray-600">Dirección:</label>
        <input 
          id="address"
          type="text"
          v-model="address"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa tu dirección"
        />
      </div>

      <button 
        @click="placeOrder" 
        class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Realizar pedido
      </button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';

export default {
  name: 'Checkout',
  setup() {
    const cartStore = useCartStore();

    const placeOrder = () => {
      if (!cartStore.cartItems.length) {
        window.alert('No hay productos en el carrito');
        return;
      }
      window.alert('Pedido realizado con éxito');
      cartStore.clearCart();
    };

    return { cartStore, placeOrder };
  }
}
</script>
