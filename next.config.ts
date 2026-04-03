import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    VITE_FRONTEND_FORGE_API_KEY: process.env.VITE_FRONTEND_FORGE_API_KEY || "",
    VITE_FRONTEND_FORGE_API_URL: process.env.VITE_FRONTEND_FORGE_API_URL || "",
    VITE_OAUTH_PORTAL_URL: process.env.VITE_OAUTH_PORTAL_URL || "",
    VITE_APP_ID: process.env.VITE_APP_ID || "",
  },
};

export default nextConfig;
