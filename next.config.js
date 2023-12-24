/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http://14.225.254.88', '127.0.0.1']
    },
    env: {
        API_ENDPOINT: 'http://14.225.254.88:1337',
    },
}

module.exports = nextConfig
