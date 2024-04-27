/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    output: "standalone",

    // async redirects() {
    //     return [
    //         {
    //             source: '/((?!\\.swa).*)',
    //             destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
    //             permanent: false,
    //         },
    //     ]
    // },

    // async rewrites() {
    //     return {
    //         beforeFiles: [
    //             {
    //                 source: '/((?!\\.swa).*)',
    //                 destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
    //             }
    //         ]
    //     }
    // },
};

module.exports = nextConfig;
