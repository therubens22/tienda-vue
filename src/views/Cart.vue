<template>
  <div class="cart">
    <h2>
      <LucideShoppingCart size="24" /> Tu Carrito
    </h2>
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <p>{{ item.name }} - ${{ item.price }}</p>
      <button @click="removeFromCart(item)">Eliminar</button>
    </div>
    <p v-if="cartItems.length === 0">El carrito está vacío</p>
    <button v-if="cartItems.length > 0" @click="checkout">Proceder al pago</button>
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
  margin-bottom: 20px;
}
</style>
