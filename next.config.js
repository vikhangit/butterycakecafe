/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://103.98.160.198:2211',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
