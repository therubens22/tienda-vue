<template>
  <div class="product-list">
    <Carousel @update-product="updateSelectedProduct" />
    <ProductDetail 
      v-if="selectedProduct" 
      :product="selectedProduct" 
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import Carousel from "@/components/Carrusel.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import { products } from "@/data/products"; 
import { useCartStore } from "@/stores/cartStore"; // 👈 importar el store

export default {
  components: {
    Carousel,
    ProductDetail
  },
  data() {
    return {
      selectedProduct: products[0]
    };
  },
  methods: {
    updateSelectedProduct(product) {
      this.selectedProduct = product;
    },
    handleAddToCart(product) {
      const cartStore = useCartStore(); // 👈 usar el store
      cartStore.addToCart(product);     // 👈 agregar al carrito
    }
  }
};
</script>
