import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // ensures assets load correctly on Vercel
  build: {
    rollupOptions: {
      input: resolve(__dirname, "public/index.html"),
    },
  },
});
