<template>
  <div v-if="product">
    <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </div>
  <div v-else>
    <p>Cargando producto...</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
