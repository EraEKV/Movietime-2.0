import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.themoviedb.org'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, stale-while-revalidate=0',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
