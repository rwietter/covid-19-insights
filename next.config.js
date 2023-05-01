/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  },
  env: {
    API_KEY: process.env.API_KEY
  }
};

module.exports = nextConfig;
