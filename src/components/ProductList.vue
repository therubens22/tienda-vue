<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<script>
import { products } from "@/data/products.js";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      products
    };
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
