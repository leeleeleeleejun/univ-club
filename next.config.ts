/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128, 256],
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS
      ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',')
      : [],
  },
};

module.exports = nextConfig;
