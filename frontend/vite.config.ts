import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: process.env.VITE_HOST,
    port: Number(process.env.VITE_FRONTEND_PORT),
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src", "Api.js"),
    },
  },
});
