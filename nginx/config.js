/*
 * This file overrides some environment that is compiled into the app, making it more portable.
 * Set any of these in your environment before running the nginx container that hosts the SPA.
 */
(function(window) {
  window.RuntimeConfig = {};

  /*
   * The ASPSP API base url (https host and port).
   * If you change this to point to your API Gateway or PingAuthorize,
   * make sure to set the CORS policy to allow access from your webserver.
   */
  window.RuntimeConfig.OPEN_BANKING_BASE_URL = "${OPEN_BANKING_BASE_URL}";

  /*
   * The ASPSP API prefix or base path.
   */
  window.RuntimeConfig.OPEN_BANKING_API_NAMESPACE = "${OPEN_BANKING_API_NAMESPACE}";

  /*
   * The https URL where this app will redirect for login.
   */
  window.RuntimeConfig.OAUTH2_AUTHORIZATION_URL = "${OAUTH2_AUTHORIZATION_URL}";

  /*
   * The client id this app will use to identify itself to the authorization server.
   */
  window.RuntimeConfig.OAUTH2_CLIENT_ID = "${OAUTH2_CLIENT_ID}";

  /*
   * Webdis service where risk.html will store simulated risk.
   */
  window.RuntimeConfig.WEBDIS_BASE_URL = "${WEBDIS_BASE_URL}";

  /*
   * URL from which to get the user's permissions.
   * If no URL is defined then default permissions are used.
   */
  window.RuntimeConfig.PERMISSIONS_URL = "${PERMISSIONS_URL}";
})(window);
