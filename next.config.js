/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    ...nextConfig,
    // async rewrites() {
    //     return {
    //         beforeFiles: [
    //             {
    //                 source: '/((?!.swa).*)<YOUR MATCHING RULE>',
    //                 destination: '<YOUR REWRITE RULE>',
    //             }
    //         ]
    //     }
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/((?!.swa).*)<YOUR MATCHING RULE>',
    //             destination: '<YOUR REDIRECT RULE>',
    //             permanent: false,
    //         },
    //     ]
    // },
    output: "standalone",
}
