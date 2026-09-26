import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  // Pin the app root to this folder so a stray lockfile higher up (e.g. in the home directory)
  // is never mistaken for the workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
