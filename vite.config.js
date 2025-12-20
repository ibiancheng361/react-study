import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'; // 需要安装 @types/node
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layout': path.resolve(__dirname, './src/layout'),
    }
  },
  server: {
    port: 3000,        // 👈 修改为你想要的端口
    // open: true,        // 可选：启动时自动打开浏览器
    host: '0.0.0.0',   // 可选：允许外部访问（如局域网）
  }
})
