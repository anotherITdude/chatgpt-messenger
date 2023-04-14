/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: { appDir: true },
  swcMinify: true,
}

module.exports = nextConfig
