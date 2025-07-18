import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/web/', // Important for GitHub Pages
  plugins: [react()],
});
