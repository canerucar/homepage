const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    env: {
      API_URL: isDev ? 'http://localhost:3000' : 'https://ademilter.com'
    },
    images: {
      domains: ['dl.airtable.com']
    },
    pwa: {
      dest: 'public',
      disable: isDev
    },
    experimental: {
      optimizeFonts: true,
      modern: true
    }
  }
}

module.exports = (phase) => withPWA(nextConfig(phase))
