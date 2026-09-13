import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["overplay-revenue-gizmo.ngrok-free.dev"],
  },
  plugins: [react()],
});
