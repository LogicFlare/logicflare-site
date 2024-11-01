import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,  // Permite escutar em rede
    port: 3000,  // Altera para a porta 3000
  },
});