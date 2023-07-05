/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  }
};

module.exports = nextConfig;
