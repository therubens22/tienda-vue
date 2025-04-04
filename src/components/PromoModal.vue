<template>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 class="text-xl font-bold text-blue-600">¡Oferta Especial!</h2>
        <p class="mt-2 text-gray-700">Aprovecha nuestros bonos de descuento exclusivos por tiempo limitado.</p>
        <button @click="closeModal" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Cerrar
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: true,
      };
    },
    methods: {
      closeModal() {
        this.showModal = false;
      },
    },
    mounted() {
      setTimeout(() => {
        this.showModal = false;
      }, 10000); // Se cierra automáticamente después de 10 segundos
    }
  };
  </script>
  