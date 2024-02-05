/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '**',
        port: '3000',
        protocol: 'http',
      },
    ],

    // domains: ['localhost', 'digitalhippo-production-b6e0.up.railway.app'],
  },
};

module.exports = nextConfig;
