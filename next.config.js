/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.metafuse.me",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
