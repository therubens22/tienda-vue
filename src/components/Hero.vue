<template>
  <section id="home"
    class="hero bg-cover bg-center h-screen flex items-center justify-center text-white sm:px-10"
    :style="{ backgroundImage: 'url(' + bannerImage + ')' }"
  >
    <div class="text-center backdrop-blur-xl bg-white/50 p-6 rounded-xl w-11/12 sm:w-auto">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Bienvenidos a Nuestra Tienda
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 mb-6">
        Descubre nuestros productos exclusivos
      </p>
      <router-link to="/productos">
  <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm sm:text-base">
    Ver Productos
  </button>
</router-link>


    </div>
  </section>
</template>

<script>
import bannerImage from '@/assets/img/banner.jpg';

export default {
  data() {
    return {
      bannerImage
    };
  }
};
</script>

<style scoped>
.hero {
  background-position: center;
  background-size: cover;
  height: 100vh;
  color: white;
  text-align: center;
}
</style>
