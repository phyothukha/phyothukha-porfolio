/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },

      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
