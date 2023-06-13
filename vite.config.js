import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //! Tùy chỉnh port
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src:'/src',
      public:'/public',
    }
  }
});
