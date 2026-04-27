import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
      process.env.SANITY_PROJECT_ID ||
      "",
    NEXT_PUBLIC_SANITY_DATASET:
      process.env.NEXT_PUBLIC_SANITY_DATASET ||
      process.env.SANITY_DATASET ||
      "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
