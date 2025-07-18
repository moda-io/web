import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/src/main.jsx/', // Important for GitHub Pages
  plugins: [react()],
});
