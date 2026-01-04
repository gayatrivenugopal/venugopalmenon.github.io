import { defineConfig } from "vite";
//import react from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
   /*build: {
    outDir: 'docs'
  },*/
  plugins: [react()],
  base: '/venugopalmenon.github.io/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
