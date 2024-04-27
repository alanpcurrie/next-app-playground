module.exports = {
    async redirects() {
        return [
            {
                source: '/((?!\\.swa).*)',
                destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                permanent: false,
            },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/((?!\\.swa).*)',
                    destination: 'https://delightful-beach-0001a6110.5.azurestaticapps.net/',
                }
            ]
        }
    },
    output: "standalone",
};
