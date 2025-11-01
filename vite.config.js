import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// NOTE: don't import `@tailwindcss/vite` here - it pulls in native bindings
// (via @tailwindcss/oxide) which can fail in some build environments (like
// Vercel's build VM). Use a PostCSS config file instead so Tailwind runs at
// build-time without loading native bindings in the Vite config.
export default defineConfig({
  plugins: [react()],
  css: {
    // Vite will pick up `postcss.config.cjs` automatically. Keep this object
    // in case you want to add further CSS options.
    postcss: {},
  },
  build: {
    cssMinify: "esbuild", // use esbuild instead of lightningcss
  },
});
