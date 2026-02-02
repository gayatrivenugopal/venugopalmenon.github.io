import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';

// Plugin to copy images
function copyImagesPlugin() {
  return {
    name: 'copy-images',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'src/pages/images');
      const destDir = path.resolve(__dirname, 'docs/assets');
      
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true });
      }
      
      const files = readdirSync(srcDir);
      files.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
          copyFileSync(
            path.join(srcDir, file),
            path.join(destDir, file)
          );
          console.log(`Copied: ${file}`);
        }
      });
    }
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'docs',
  },
  plugins: [react(), copyImagesPlugin()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});