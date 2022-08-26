/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vignette.wikia.nocookie.net', 'www.themealdb.com'],
  }
}

module.exports = nextConfig
