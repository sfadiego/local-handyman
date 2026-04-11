/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  turbopack: {
    resolveAlias: {
      '@': '.',
    },
  },
};

module.exports = nextConfig;
