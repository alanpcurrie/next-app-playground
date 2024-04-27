/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    ...nextConfig,
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/((?!.*\\.swa).*)',
                    destination: '/',
                }
            ]
        }
    },
    async redirects() {
        return [
            {
                source: '/((?!.*\\.swa).*)',
                destination: '/',
                permanent: false,
            },
        ]
    },
    output: "standalone",
}
