import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({ 
  ///// localhost server ////////
  server: {  
    host:true,
  },
  plugins: [react()],
})

//////////////////////////////////
