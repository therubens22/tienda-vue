<template>
  <div class="p-4 max-w-2xl mx-auto m-10">
    <h2 class="text-2xl font-bold m-8 text-center">Carrito de Compras</h2>

    <div v-if="cartItems.length === 0" class="text-gray-500 text-center">
      El carrito está vacío.
    </div>

    <div v-else>
      <ul class="space-y-4">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="border rounded-lg p-4 shadow-md bg-white text-center"
        >
          <h3 class="font-semibold text-lg mb-1">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">Cantidad: {{ item.quantity }}</p>
          <p class="text-sm text-gray-600 mb-3">Precio: ${{ item.price }}</p>

          <button
            @click="removeFromCart(item.id)"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Eliminar
          </button>
        </li>
      </ul>

      <div class="mt-6 font-semibold text-lg text-center">
        Total: ${{ totalPrice }}
      </div>

      <div class="text-center mt-4">
        <router-link
          to="/checkout"
          class="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Finalizar compra
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';

export default {
  name: 'Cart',
  setup() {
    const cartStore = useCartStore();

    // Computed para reactividad en cartItems
    const cartItems = computed(() => cartStore.cartItems);

    const totalPrice = computed(() =>
      cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    return {
      cartItems,
      removeFromCart: cartStore.removeFromCart,
      totalPrice
    };
  }
};
</script>
