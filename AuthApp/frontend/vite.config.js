import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true, // Enable minification for production
    sourcemap: false, // Disable sourcemaps for production (optional)
  },
  server: {
    proxy: {
      '/api': 'https://authapp-server-user-login-crud.onrender.com' // Only for development
    }
  }
});

