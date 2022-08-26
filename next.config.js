/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vignette.wikia.nocookie.net', 'www.themealdb.com', 'b2cdemo.getswift.asia'],
  }
}

module.exports = nextConfig
