<template>
  <div v-if="product && product.image" class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ formattedPrice }}</p>
  </div>
  <div v-else>
    <p>Cargando producto...</p>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: false, // Ahora no es obligatorio para evitar errores
    default: () => ({}) // Se asigna un objeto vacío como fallback
  }
});

const formattedPrice = computed(() =>
  props.product?.price ? `$${props.product.price.toLocaleString()}` : "Precio no disponible"
);
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
