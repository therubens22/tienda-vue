<template>
  <div class="product-card bg-white shadow-lg rounded-lg p-4">
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-md mb-4">
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-gray-700">{{ product.price | currency }}</p>
    <button class="bg-blue-600 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-500">Ver más</button>
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
}
</script>

<style scoped>
/* Puedes agregar más estilos personalizados aquí si lo necesitas */
</style>
