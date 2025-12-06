import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: Set the base path to your repository name
  base: "/Netflix-Clone-2025/",
});
