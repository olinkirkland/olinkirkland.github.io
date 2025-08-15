import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'development' ? '/' : '/site-2025/',
    plugins: [vue()]
}));
