<template>
  <div class="cart p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
    <h2 class="text-2xl font-bold text-center mb-6">
      <LucideShoppingCart size="24" class="inline-block mr-2" /> Tu Carrito
    </h2>
    <div v-for="item in cartItems" :key="item.id" class="cart-item mb-4 flex justify-between items-center p-4 border-b border-gray-200">
      <p class="text-lg">{{ item.name }} - ${{ item.price }}</p>
      <button @click="removeFromCart(item)" class="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition duration-300">
        Eliminar
      </button>
    </div>
    <p v-if="cartItems.length === 0" class="text-center text-gray-500">El carrito está vacío</p>
    <button v-if="cartItems.length > 0" @click="checkout" class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
      Proceder al pago
    </button>
  </div>
</template>

<script>
import { LucideShoppingCart } from 'lucide-vue-next';

export default {
  name: 'Cart',
  components: {
    LucideShoppingCart
  },
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cart')) || []
    }
  },
  methods: {
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    checkout() {
      this.$router.push({ name: 'checkout' });
    }
  }
}
</script>

<style scoped>
.cart-item {
  transition: background-color 0.3s ease;
}
.cart-item:hover {
  background-color: #f7f7f7;
}
</style>
