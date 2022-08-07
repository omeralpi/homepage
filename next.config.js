module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
      domains: ["dl.airtable.com"],
    },
    experimental: {
      legacyBrowsers: false,
      browsersListForSwc: true,
    },
  };
  return nextConfig;
};
