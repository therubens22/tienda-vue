<template>
  <div v-if="product && product.image">
    <img :src="product.image" alt="Product Image" />
  </div>
  <div v-else>
    <p>No image available</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
