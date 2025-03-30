<template>
    <footer class="bg-gray-800 text-white py-6 mt-10">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="flex justify-between items-center">
          <!-- Pie de página con derechos de autor (izquierda) -->
          <p class="text-left">&copy; 2025 FabinaCrocc Store. Todos los derechos reservados.</p>
  
          <!-- Enlaces de navegación (íconos a la derecha) -->
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
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  footer {
    background-color: #2d2d2d;
    color: white;
  }
  </style>
  