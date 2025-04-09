<template>
  <footer class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-sm py-6 mt-10">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      
      <!-- Medios de pago (izquierda) -->
      <div class="flex flex-col items-start">
        <h3 class="font-bold text-lg">Medios de Pago</h3>
        <div class="flex space-x-3 mt-2">
          <a href="https://www.mercadopago.com" target="_blank">
            <img src="@/assets/img/mercadopago.png" alt="MercadoPago" class="h-6 object-contain">
          </a>
          <a href="https://www.visa.com" target="_blank">
            <img src="@/assets/img/tarjeta.png" alt="Visa" class="h-6">
          </a>
          <a href="https://www.paypal.com" target="_blank">
            <img src="@/assets/img/paypal.jpeg" alt="PayPal" class="h-6">
          </a>
        </div>
      </div>

      <!-- Derechos reservados (centrado) -->
      <div class="flex-1 text-center sm:text-center">
        <p>&copy; 2025 FabinaCrocc Store. Todos los derechos reservados.</p>
      </div>

      <!-- Sección de Ayuda (derecha) -->
      <div class="flex flex-col">
        <h3 class="font-bold text-lg">Ayuda</h3>
        <ul class="mt-2 space-y-2">
  <li><router-link to="/como-comprar" class="hover:underline">Cómo comprar</router-link></li>
  <li><router-link to="/envios" class="hover:underline">Tipos de envío</router-link></li>
  <li><router-link to="/politica-reembolso" class="hover:underline">Política de Reembolso y Devoluciones</router-link></li>
</ul>

      </div>

    </div>
  </footer>
</template>

