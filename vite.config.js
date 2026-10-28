import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-static-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url.split('?')[0];
          // Serve /assets/* or /bgauss-scooter-*.png
          if (rawUrl.startsWith('/assets/') || rawUrl.startsWith('/bgauss-scooter-')) {
            const relPath = rawUrl.startsWith('/') ? rawUrl.slice(1) : rawUrl;
            const fullPath = path.resolve(__dirname, relPath);
            if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
              const ext = path.extname(fullPath).toLowerCase();
              const mimeTypes = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.svg': 'image/svg+xml',
                '.glb': 'model/gltf-binary',
                '.gltf': 'model/gltf+json',
                '.webp': 'image/webp'
              };
              if (mimeTypes[ext]) {
                res.setHeader('Content-Type', mimeTypes[ext]);
              }
              return fs.createReadStream(fullPath).pipe(res);
            }
          }
          next();
        });
      },
      closeBundle() {
        // Copy assets/ to dist/assets/
        const srcAssets = path.resolve(__dirname, 'assets');
        const destAssets = path.resolve(__dirname, 'dist', 'assets');
        if (fs.existsSync(srcAssets)) {
          fs.cpSync(srcAssets, destAssets, { recursive: true });
        }
        // Copy root scooter PNGs to dist/
        ['bgauss-scooter-green.png', 'bgauss-scooter-red.png'].forEach((f) => {
          const srcFile = path.resolve(__dirname, f);
          const destFile = path.resolve(__dirname, 'dist', f);
          if (fs.existsSync(srcFile)) {
            fs.copyFileSync(srcFile, destFile);
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  }
});
