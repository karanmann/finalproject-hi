module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7dfe116a2c49104606dd7222323bca55'),
  },
});
