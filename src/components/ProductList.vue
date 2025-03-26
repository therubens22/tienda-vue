<template>
  <div class="product-list">
    <!-- Asegúrate de que cada producto tenga las propiedades necesarias -->
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        { name: 'Producto 1', price: 29.99 },
        { name: 'Producto 2', price: 49.99 }
        // Asegúrate de que los productos tengan la propiedad `name` y `price`
      ]
    }
  }
}
</script>
