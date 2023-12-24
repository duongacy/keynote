/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1']
    },
    env: {
        API_ENDPOINT: 'http://127.0.0.1:1337',
    },
}

module.exports = nextConfig