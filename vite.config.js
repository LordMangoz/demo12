import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        main: resolve(__dirname, "main.html"),
        profile: resolve(__dirname, "profile.html"),
        review: resolve(__dirname, "review.html"),
        eachHike: resolve(__dirname, "eachHike.html"),
        saved: resolve(__dirname, "saved.html"),
      },
    },
  },
});
