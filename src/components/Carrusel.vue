<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div
        class="carousel-item"
        v-for="(product, index) in products"
        :key="index"
        @click="selectProduct(product)"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="carousel-image"
        />
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/data/products";

export default {
  data() {
    return {
      products
    };
  },
  methods: {
    selectProduct(product) {
      this.$emit("update-product", product);
    }
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #eee;
}

.carousel-wrapper {
  display: flex;
  gap: 20px;
  animation: slide 12s linear infinite;
  will-change: transform;
}

.carousel-item {
  position: relative;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.carousel-item:hover {
  transform: scale(1.05);
}

.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  width: 100%;
  text-align: center;
  color: #000000;
  padding: 10px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-price {
  font-size: 16px;
  color: #007bff;
}

/* Animación para mover el carrusel de izquierda a derecha en bucle */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
