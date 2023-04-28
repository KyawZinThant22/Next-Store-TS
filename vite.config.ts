import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
   build: {
      target: 'es2020', // Target ECMAScript 2020 (ES11)
      outDir: 'build', // Output directory for production build
   },
   plugins: [react(), tsconfigPaths()],
});
