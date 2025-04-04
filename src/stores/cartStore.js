import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const item = cartItems.value.find(i => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    cartItems.value = cartItems.value.filter(i => i.id !== id);
  };

  // Vaciar carrito
  const clearCart = () => {
    cartItems.value = [];
  };

  // Obtener el total a pagar
  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  return { cartItems, addToCart, removeFromCart, clearCart, totalPrice };
});
