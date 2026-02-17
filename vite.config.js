import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  // Vercel sets process.env.VERCEL = "1"
  const isVercel = process.env.VERCEL === "1";

  return {
    plugins: [react()],
    base: isVercel ? "/" : "/mtaani-ltd/", // GH Pages needs repo path
  };
});
