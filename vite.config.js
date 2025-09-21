import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Papi-G-Beats/',   // 👈 this is the fix for GitHub Pages
  plugins: [react()],
})
