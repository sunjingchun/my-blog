import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/',                   // 你已在用自定义域名，应为 '/'
  optimizeDeps: { include: ['buffer'] }
})