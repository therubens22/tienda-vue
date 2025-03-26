<template>
    <div class="checkout">
      <h2>Finalizar compra</h2>
      <p>Nombre: <input type="text" v-model="customerName" /></p>
      <p>Dirección: <input type="text" v-model="address" /></p>
      <button @click="placeOrder">Realizar pedido</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Checkout',
    data() {
      return {
        customerName: '',
        address: ''
      }
    },
    methods: {
      placeOrder() {
        console.log('Pedido realizado por', this.customerName)
        // Implementar lógica para procesar el pedido
      }
    }
  }
  </script>
  
  <style scoped>
  .checkout {
    padding: 20px;
  }
  </style>
  