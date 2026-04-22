import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Travis-Engineering-Website',
  assetPrefix: '/Travis-Engineering-Website',
};

export default nextConfig;
