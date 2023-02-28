/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/dayorte/" : "",
  images: {
    unoptimized: true,
  },
  nextConfig: {
    reactStrictMode: true,
  },
};
