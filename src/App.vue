<template>
  <div id="app">
    <PromoModal />
    <Header />
    <router-view />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import PromoModal from '@/components/PromoModal.vue';
import Header from '@/components/Header.vue';
import ContactSection from '@/components/ContactSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { PromoModal, Header,ContactSection, Footer }
}
</script>
