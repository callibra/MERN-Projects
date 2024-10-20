import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://authapp-server-user-login-crud.onrender.com'
    }
  },
  build: {
    minify: false,
    sourcemap: true
  }
});

