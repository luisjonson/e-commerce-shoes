import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import process from "process"

export default defineConfig(({mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  return {
    base: "/e-commerce-shoes",
    plugins: [react()],
    server: {
      host: env.VITE_HOST || "0.0.0.0",
      port: Number.parseInt(env.VITE_PORT || "5173"),
    },
  }
})