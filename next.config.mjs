/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index, follow',
            },
          ],
        },
      ]
    },
  }