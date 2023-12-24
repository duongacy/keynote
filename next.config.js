/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['0.0.0.0']
    },
    env: {
        API_ENDPOINT: '0.0.0.0:1337',
    },
}

module.exports = nextConfig
