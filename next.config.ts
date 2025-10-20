import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Add this line for static export
  images: {
    domains: ["image.tmdb.org", "media.themoviedb.org"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
