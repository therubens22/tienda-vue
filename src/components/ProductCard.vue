<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">{{ product.price }}</p>
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
.product-card {
  width: 250px;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
}

.product-price {
  font-size: 1rem;
  color: #ff6600;
  font-weight: bold;
  margin-top: 5px;
}
</style>
