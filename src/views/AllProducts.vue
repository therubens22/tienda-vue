<template>
    <div class="p-4 m-20">
      <h2 class="text-2xl font-bold mb-4">Ropa</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="product in clothes"
          :key="product.id"
          class="w-60 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">{{ product.name }}</h3>
            <p class="text-gray-700">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
  
      <h2 class="text-2xl font-bold mt-10 mb-4">Perfumes</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="product in perfumes"
          :key="product.id"
          class="w-60 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">{{ product.name }}</h3>
            <p class="text-gray-700">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { products } from '@/data/products';
  
  const clothes = products.filter(product =>
    product.name.toLowerCase().includes('remera') ||
    product.name.toLowerCase().includes('buzo') ||
    product.name.toLowerCase().includes('bermuda') ||
    product.name.toLowerCase().includes('falda') ||
    product.name.toLowerCase().includes('jean') ||
    product.name.toLowerCase().includes('musculosa') ||
    product.name.toLowerCase().includes('sweater')
  );
  
  const perfumes = products.filter(product =>
    product.name.toLowerCase().includes('acqua') ||
    product.name.toLowerCase().includes('chanel') ||
    product.name.toLowerCase().includes('ysl') ||
    product.name.toLowerCase().includes('vip')
  );
  </script>
  
  <style scoped>
  /* opcional, pero podés agregar más estilos acá si querés */
  </style>
  