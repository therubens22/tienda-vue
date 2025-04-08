<template>
    <section id="contact" class="bg-gray-100 dark:bg-gray-900 py-10 px-5 mt-10 mb-0">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Contáctanos</h2>
        <p class="text-gray-600 dark:text-gray-300 mt-2">Estamos aquí para ayudarte. Conéctate con nosotros a través de nuestras redes.</p>
      </div>
      
      <div class="flex justify-center space-x-4 mt-6">
        <a href="https://wa.me/tunumerodewhatsapp" target="_blank" class="text-green-500 text-3xl">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://facebook.com/tupagina" target="_blank" class="text-blue-600 text-3xl">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/tuperfil" target="_blank" class="text-pink-500 text-3xl">
            <i class="fab fa-instagram"></i>
        </a>
      </div>
      
      <form class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-8 max-w-lg mx-auto">
        <div class="mb-4 flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
          <i class="fa fa-user text-gray-500 dark:text-gray-400 mr-3"></i>
          <input type="text" placeholder="Nombre" class="w-full bg-transparent focus:outline-none text-gray-700 dark:text-white" />
        </div>
        
        <div class="mb-4 flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
          <i class="fa fa-envelope text-gray-500 dark:text-gray-400 mr-3"></i>
          <input type="email" placeholder="Correo" class="w-full bg-transparent focus:outline-none text-gray-700 dark:text-white" />
        </div>
        
        <div class="mb-4 flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
          <i class="fa fa-comment text-gray-500 dark:text-gray-400 mr-3"></i>
          <textarea placeholder="Mensaje" class="w-full bg-transparent focus:outline-none text-gray-700 dark:text-white"></textarea>
        </div>
        
        <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Enviar
        </button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactSection",
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  </style>
  