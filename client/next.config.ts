import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.alteg.io",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
