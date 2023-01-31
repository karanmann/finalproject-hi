/* @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
    env: {
        AUTH0_BASE_URL: process.env.VERCEL_URL || 'http://localhost:3000',
    },
};

module.exports = nextConfig;
