module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true,
            defaultLimit: 10,
            apolloServer: {
                tracing: true,
            },
        },
    },
});
