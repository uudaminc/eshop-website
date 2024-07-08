/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bhg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "st.hzcdn.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "signature.my",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
