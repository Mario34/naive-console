import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

function resolve(dir: string) {
  return path.resolve(__dirname, './', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    port: 8890,
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
})
