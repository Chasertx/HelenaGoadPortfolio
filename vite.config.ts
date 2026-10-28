import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://<user>.github.io/HelenaGoadPortfolio/ on GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/HelenaGoadPortfolio/' : '/',
  plugins: [react()],
}));
