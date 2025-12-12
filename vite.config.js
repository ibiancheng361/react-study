import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // 👈 修改为你想要的端口
    // open: true,        // 可选：启动时自动打开浏览器
    host: '0.0.0.0',   // 可选：允许外部访问（如局域网）
  }
})
