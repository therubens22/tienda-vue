<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div
      class="relative bg-gradient-to-br from-white via-blue-50 to-white p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center animate-fadeIn"
    >
      <!-- Icono de cierre (X) -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition duration-300"
        aria-label="Cerrar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 class="text-3xl font-extrabold text-pink-600 mb-4">🎉 ¡Oferta Especial!</h2>
      <p class="text-lg text-gray-800">
        Aprovechá nuestros <span class="font-semibold text-blue-600">bonos de descuento</span> exclusivos por tiempo limitado.
      </p>
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
      document.body.style.overflow = "auto"; // restaurar scroll
    },
  },
  mounted() {
    document.body.style.overflow = "hidden"; // desactivar scroll
    setTimeout(() => {
      this.closeModal();
    }, 10000);
  },
  beforeUnmount() {
    document.body.style.overflow = "auto"; // asegurarse que se restaura el scroll si se desmonta el componente
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
</style>
