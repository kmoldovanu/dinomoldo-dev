import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Config Vite: alias "@" -> src, così gli import restano puliti (es. "@/lib/utils")
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // In sviluppo, le chiamate a /api vengono inoltrate al backend Django
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
