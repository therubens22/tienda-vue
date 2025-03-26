<template>
  <header class="bg-blue-600 text-white p-4">
    <nav class="flex justify-between items-center">
      <h1 class="text-xl font-bold">Mi Tienda</h1>
      <ul class="flex space-x-4">
        <li><a href="/" class="hover:text-gray-300">Inicio</a></li>
        <li><a href="/about" class="hover:text-gray-300">Nosotros</a></li>
        <li><a href="/cart" class="hover:text-gray-300">Carrito</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Puedes agregar más estilos personalizados aquí si lo necesitas */
</style>
