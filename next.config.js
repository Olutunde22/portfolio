/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
