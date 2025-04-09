<template >
  <header 
    :class="['fixed top-0 left-0 w-full z-20 h-20 flex items-center justify-between px-4 sm:px-6 transition-colors duration-300', 
             isScrolled ? 'bg-blue-800 shadow-md' : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700']"
  >
    <!-- Logo -->
    <div >
      <img src="/src/assets/img/logo.png" alt="Logo" class="max-h-32 sm:max-h-48 object-contain my-4" />


    </div>

    <!-- Menú de navegación -->
    <nav>
      <ul class="flex items-center space-x-4 sm:space-x-6 text-white">
        <li>
  <router-link
    to="/#home"
    class="flex items-center"
  >
    <font-awesome-icon :icon="['fas', 'home']" class="text-xl hover:text-yellow-300" />
  </router-link>
</li>

        <li>
          <router-link to="/cart" class="flex items-center">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-xl hover:text-yellow-300" />
          </router-link>
        </li>
        <li>
          <a href="#contact" class="flex items-center">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-xl hover:text-yellow-300" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
header {
  min-width: 320px;
}
</style>
