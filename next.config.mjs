import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
