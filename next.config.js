/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
      },
    ],
  },
}

module.exports = nextConfig
