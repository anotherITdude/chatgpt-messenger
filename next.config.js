/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: { appDir: true },
  swcMinify: true,
}

module.exports = nextConfig
