/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.IMAGE_HOST1],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
