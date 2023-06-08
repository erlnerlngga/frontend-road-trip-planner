/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*"
      }
    ]
  },
  env: {
    URL_API: "backend-road-trip-planner-production.up.railway.app",
    URL_THIS: "http://localhost:3000"
  },
}

module.exports = nextConfig
