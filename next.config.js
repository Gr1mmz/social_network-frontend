/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_ID: process.env.PARSE_APPLICATION_ID,
    JS_KEY: process.env.PARSE_JAVASCRIPT_KEY,
    HOST_URL: process.env.PARSE_HOST_URL
  }
}

module.exports = nextConfig
