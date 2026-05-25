import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Add your repository name wrapped in slashes here:
  base: "/your-repository-name/", 
  build: { outDir: "dist" },
});
