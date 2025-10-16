//  vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Указываем базовый путь для GitHub Pages
  base: '/netology_68_react-forms/',
  plugins: [react()],
})
