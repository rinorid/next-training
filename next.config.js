/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vignette.wikia.nocookie.net'],
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
