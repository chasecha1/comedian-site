import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add the Sanity CDN domain
  },
};

export default nextConfig;
