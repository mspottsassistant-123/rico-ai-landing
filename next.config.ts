import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ricoai.app",
      },
      {
        protocol: "http",
        hostname: "www.ricoai.app",
      },
      {
        protocol: "https",
        hostname: "ricoai.app",
      },
      {
        protocol: "http",
        hostname: "ricoai.app",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "http",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;
