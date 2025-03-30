<template>
  <div class="product-detail" v-if="product">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h2>{{ product.name }}</h2>
    <p>${{ product.price }}</p>
    <button @click="addToCart(product)">Agregar al carrito</button>
  </div>
  <div v-else>
    <p>Cargando producto...</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    }
  }
};
</script>




<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.product-image {
  width: 80%;
  height: auto;
  border: 2px solid #333;
  border-radius: 8px;
  margin: 20px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
