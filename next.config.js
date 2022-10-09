/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "blog.sesisenai.org.br",
      "github.com",
      "cdn.freebiesupply.com",
      "www.returngis.net",
      "localhost",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
