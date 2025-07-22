import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/moda-io/web/',
  plugins: [react()],
}); 