<template>
  <div class="max-w-3xl mx-auto text-center p-10 bg-white rounded-xl shadow-md m-4">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
    <p class="text-lg text-gray-600 leading-relaxed">
      Bienvenidos a nuestra tienda de ropa. Aquí encontrarás lo mejor en moda con los estilos más actuales y a los mejores precios.
    </p>
  </div>
</template>


<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}
</style>
