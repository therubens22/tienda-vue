import './assets/tailwind.css';  // Importar Tailwind

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faCogs, faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// Agregar iconos a la librería
library.add(faHome, faCogs, faEnvelope, faShoppingCart);

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Registrar el componente de Font Awesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
