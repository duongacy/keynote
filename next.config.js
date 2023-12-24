/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['0.0.0.0']
    },
    env: {
        API_ENDPOINT: 'http://14.225.254.88::1337',
    },
}

module.exports = nextConfig
