import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/site/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
});
