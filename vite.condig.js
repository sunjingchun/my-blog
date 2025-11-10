import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// 将 base 改为 "/<repo>/" 以用于 GitHub Pages，例如 "/softblog/"
export default defineConfig({
plugins: [react()],
base: '/my-blog/'
})