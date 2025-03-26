<template>
    <div class="product-detail">
      <img :src="product.image" alt="Product image"/>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <button @click="addToCart(product)">Agregar al carrito</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {
          id: 1,
          name: 'Producto 1',
          description: 'Descripción del producto 1',
          price: 20,
          image: 'product1.jpg'
        }
      }
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product)
      }
    }
  }
  </script>
  
  <style scoped>
  .product-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  