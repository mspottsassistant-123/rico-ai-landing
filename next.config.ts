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
  async redirects() {
    return [
      {
        source: "/blogs/holisticzee-blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/why-your-moisturizer-has-more-ingredients-than-dinner-rico-ai",
        destination: "/blog/why-your-moisturizer-has-more-ingredients-than-dinner",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/the-hidden-truth-about-your-skincare-ingredients-why-less-really-is-more",
        destination: "/blog/the-hidden-truth-about-your-skincare-ingredients",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/ingredient-breakdown-the-truth-about-niacinamide-why-this-vitamin-b3-powerhouse-works-for-every-skin-type",
        destination: "/blog/ingredient-breakdown-niacinamide",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/why-mineral-sunscreen-matters-holistic-esthetician-explains-the-badger-difference",
        destination: "/blog/why-mineral-sunscreen-matters",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/the-complete-guide-to-clean-skincare-scan-decode-and-glow-with-rico-ai-%F0%9F%93%B2%E2%9C%A8",
        destination: "/blog/the-complete-guide-to-clean-skincare",
        permanent: true,
      },
      {
        source:
          "/blogs/holisticzee-blog/nighttime-skincare-routine-step-by-step-guide-with-rico-ai-%F0%9F%8C%99%E2%9C%A8",
        destination: "/blog/nighttime-skincare-routine",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
