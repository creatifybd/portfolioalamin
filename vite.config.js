import { defineConfig } from "vite";
export default defineConfig({
  server: { allowedHosts: ["terminal.local"] },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.endsWith("/src/firebase.js")) return "firebase";
          if (id.endsWith("/src/vendor.js")) return "vendor";
        },
      },
    },
  },
});
