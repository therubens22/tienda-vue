<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <ProductList />
    <ProductCard />
    <ProductDetail />
    <Cart />
    <Checkout />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ProductList from './components/ProductList.vue'
import ProductCard from './components/ProductCard.vue'
import ProductDetail from './views/ProductDetail.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import About from './views/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ProductList,
    About,
    ProductCard,
    ProductDetail,
    Cart,
    Checkout,
  }
}
</script>
