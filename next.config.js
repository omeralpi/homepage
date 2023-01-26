/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  staticPageGenerationTimeout: 10,
  experimental: {
    appDir: true,
  },
};
