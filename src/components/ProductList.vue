<template>
  <div class="product-list">
    <Carousel @update-product="updateSelectedProduct" />
    <ProductDetail v-if="selectedProduct" :product="selectedProduct" />
  </div>
</template>

<script>
import Carousel from "@/components/Carrusel.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import { products } from "@/data/products"; 

export default {
  components: {
    Carousel,
    ProductDetail
  },
  data() {
    return {
      selectedProduct: products[0] // Iniciar con el primer producto
    };
  },
  methods: {
    updateSelectedProduct(product) {
      this.selectedProduct = product; // Actualiza el producto seleccionado
    }
  }
};
</script>
