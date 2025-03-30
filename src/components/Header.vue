<template>
  <header
    class="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 h-16 flex items-center px-6">
    <!-- Logo -->
    <img src="@/assets/img/logo.png" alt="Logo" class="h-52 w-auto mt-6" />

    <!-- Menú de navegación -->
    <nav class="ml-auto">
      <ul class="flex space-x-6 text-white">
        <li>
          <a href="#home" class="flex items-center">
            <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
          </a>
        </li>
        <li>
          <router-link to="/cart" class="flex items-center">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="mr-2" />
          </router-link>

        </li>
        <li>
          <a href="#contact" class="flex items-center">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  height: 60px;
  /* Hace que el header sea más angosto */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
