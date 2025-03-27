import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //vueDevTools(),
   // tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': '/src' // Esto mapea '@' a la carpeta 'src'
    }
  }
})
