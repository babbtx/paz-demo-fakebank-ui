/*
 * This file can be used to override any environment vars from compile time.
 *
 * To use:
 *   $ cp example.config.js config.js
 *   $ vi config.js
 *
 * And customize for your deployment environment.
 *
 */
(function(window) {
  window.RuntimeConfig = {};

  /*
   * The ASPSP API base url (https host and port).
   * If you change this to point to your API Gateway or PingAuthorize,
   * make sure to set the CORS policy to allow access from your webserver.
   */
  // window.RuntimeConfig.OPEN_BANKING_BASE_URL = "https://babbtx-aspsp.herokuapp.com";

  /*
   * The ASPSP API prefix or base path.
   */
  // window.RuntimeConfig.OPEN_BANKING_API_NAMESPACE = "OpenBanking/v2";

  /*
   * The https URL where this app will redirect for login.
   */
  // window.RuntimeConfig.OAUTH2_AUTHORIZATION_URL = "https://pf.example.com:9031/as/authorization.oauth2";

  /*
   * The client id this app will use to identify itself to the authorization server.
   */
  // window.RuntimeConfig.OAUTH2_CLIENT_ID = "fakebank-ui";

  /*
   * Webdis service where risk.html will store simulated risk.
   */
  // window.RuntimeConfig.WEBDIS_BASE_URL = "http://localhost:7379";

  /*
   * URL from which to get the user's permissions.
   * If no URL is defined then default permissions are used.
   */
  // window.RuntimeConfig.PERMISSIONS_URL = undefined;
})(window);
