const cors = require('cors');

const corsOptions = {
  origin: 'https://www.damepanely.cz',
  methods: 'POST',
  credentials: true,
};

module.exports = {
  reactStrictMode: true,

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.resolve.extensions.push('.web.js');
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/api/raynet/:path*', // Adjust path if needed
        destination: 'https://www.lunastav.cz/api/raynet/:path*', // Your target API URL
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/api/raynet/:path*', // Adjust path if needed
        headers: corsOptions,
      },
    ];
  },
};
