import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rsingh1996.github.io/quiz-app/",
  plugins: [react()],
});
