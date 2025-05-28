/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/assets/imgs/**",
      },
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "flower.elevateegy.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
