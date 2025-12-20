import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/jazser/',
    plugins: [react()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
    },
});








