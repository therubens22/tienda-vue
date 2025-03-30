<template>
    <div class="carousel-container">
      <div class="carousel-images">
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
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
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
        this.$emit("update-product", product); // Emitimos el producto seleccionado
      }
    }
  };
  </script>
  
  
  <style scoped>
  .carousel-container {
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-images {
    display: flex;
    animation: slide 10s linear infinite;
  }
  
  .carousel-item {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    cursor: pointer;
  }
  
  .carousel-item:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .carousel-image {
    width: 50%;
    height: 100%;
  }
  
  .product-info {
    position: absolute;
    bottom: -50px;
    width: 100%;
    text-align: center;
    color: #000000;
  }
  
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  