/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            // omitted for brevity...
          ]
        },
        {
          source: "/api/raynet",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "false" },
            { key: "Access-Control-Allow-Origin", value: "https://damepanely.com" },
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
          ]
        }
      ]
    }
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.extensions.push('.web.js');
    return config;
  },
};

module.exports = nextConfig;
