import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
                pathname: "/**", // allow all image paths from this host
            },
        ],
    },
};

export default nextConfig;
