import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⬅️ MUST be exactly the repository name, including slashes
  base: "/Netflix-Clone-2025/",
});
