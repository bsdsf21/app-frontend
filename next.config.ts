import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dawn.com',
        port: '', // Leave blank for default ports
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;

