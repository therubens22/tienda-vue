<template>
  <section class="hero bg-cover bg-center h-screen flex items-center justify-center text-white" :style="{ backgroundImage: 'url(' + bannerImage + ')' }">
    <div class=" text-center backdrop-blur-xl bg-white/50 p-6 rounded-xl">
      <h1 class="text-4xl font-bold mb-4">Bienvenidos a Nuestra Tienda</h1>
      <p class="mb-6">Descubre nuestros productos exclusivos</p>
      <button class="bg-blue-500 py-2 px-6 rounded-full text-xl">Ver Productos</button>
    </div>
  </section>
</template>

<script>
import bannerImage from '@/assets/img/banner.jpg'; // Usamos alias para importar la imagen

export default {
  data() {
    return {
      bannerImage: bannerImage // Establecemos la imagen en el objeto data
    };
  }
};
</script>

<style scoped>
.hero {
  background-position: center;
  background-size: cover;
  height: 100vh;
  color: rgb(255, 255, 255);
  text-align: center;
  text-align: center
}


</style>




