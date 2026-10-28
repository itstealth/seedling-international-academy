import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a build target a scratch dir (NEXT_BUILD_DIR=.next-new) so the running
  // app keeps serving the current .next until the new build is swapped in.
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cambridge.seedlingschools.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'seedlingschools.com',
      },
      {
        protocol: 'https',
        hostname: 'pplx-res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
