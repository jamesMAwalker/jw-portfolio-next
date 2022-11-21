const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "PUBLIC",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development'
  }
})
