/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantiene Prisma y PG fuera del bundle del cliente
  serverExternalPackages: ['pg', '@prisma/adapter-pg', '@prisma/client'],

  turbopack: {
    resolveAlias: {
      '@/*': ['./src/*'],
    },
  },
};

module.exports = nextConfig;
