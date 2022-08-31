const withPWA = require('next-pwa')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

module.exports = withPWA(nextConfig);
