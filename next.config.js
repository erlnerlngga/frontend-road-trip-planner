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
    URL_API: "http://localhost:8000",
    URL_THIS: "http://localhost:3000"
  },
}

module.exports = nextConfig
