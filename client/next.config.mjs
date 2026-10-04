import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const isVercel = process.env.VERCEL === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.alteg.io",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "pub-14ca411e8a7645dc95d2bffcb0db0358.r2.dev",
				pathname: "/**",
			},
		],
	},
	output: isVercel ? undefined : "standalone",
};

export default withNextIntl(nextConfig);
