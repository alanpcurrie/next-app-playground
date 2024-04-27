/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    ...nextConfig,
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/((?!.swa).*)https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                    destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                }
            ]
        }
    },
    async redirects() {
        return [
            {
                source: '/((?!.swa).*)https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                permanent: false,
            },
        ]
    },
    output: "standalone",
}
