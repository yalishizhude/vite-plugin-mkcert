import { defineConfig } from 'vite'
import VitePluginCertificate from 'vite-plugin-certificate'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false,
    https: true
  },
  plugins: [VitePluginCertificate()]
})
