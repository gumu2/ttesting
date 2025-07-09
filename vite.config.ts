import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './vanilla-version',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});