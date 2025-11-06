import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/Bien-rentre-web/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          i18n: ['vue-i18n'],
          emailjs: ['@emailjs/browser']
        }
      }
    }
  }
})
