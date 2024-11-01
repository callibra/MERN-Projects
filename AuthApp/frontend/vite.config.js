import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: false
  }
});

// // https://vitejs.dev/config/ Only for localhost testing use this code!
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:4000'
//     }
//   },
//   build: {
//     minify: false,
//     sourcemap: true
//   }
// });

