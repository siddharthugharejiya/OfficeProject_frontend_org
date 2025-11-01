import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Remove '@tailwindcss/vite' (for Tailwind v3)
// Tailwind works automatically via PostCSS

export default defineConfig({
  plugins: [react()],
})
