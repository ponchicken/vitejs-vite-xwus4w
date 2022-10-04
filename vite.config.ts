import { defineConfig } from 'vite';
import { dynamicImportCache } from './plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dynamicImportCache()],
});
