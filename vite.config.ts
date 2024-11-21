import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0', // Makes your server accessible on your local network 
    port:3500,
  }
})
