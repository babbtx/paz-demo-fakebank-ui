// config/dotenv.js
module.exports = function(env) {
  return {
    clientAllowedKeys: ['OPEN_BANKING_BASE_URL', 'OPEN_BANKING_API_NAMESPACE', 'OAUTH2_AUTHORIZATION_URL', 'OAUTH2_CLIENT_ID'],
    failOnMissingKey: true,
    path: `.env${ env === "production" ? "-production" : "" }` // use .env-production for production build
  };
};
