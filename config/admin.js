module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c6c4c8b04e194c885c6a4d9583c4986'),
  },
});
