// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Redirige todas las solicitudes a /api a http://localhost:5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false, // Si tu servidor backend está usando HTTPS, cámbialo a 'true'
      },
    },
  },
});
