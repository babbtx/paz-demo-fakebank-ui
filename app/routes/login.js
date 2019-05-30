import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ENV from '../config/environment';

export default Route.extend(UnauthenticatedRouteMixin, {
  authorizationUrl: ENV.oauth_authorization_url,
  clientId: ENV.oauth_client_id,

  beforeModel() {
    const url = `${this.authorizationUrl}?client_id=${this.clientId}`
      + `&redirect_uri=${window.location.origin}/oauth-callback`
      + "&scope=accounts"
      + "&response_type=token";
    window.location.replace(url);
  }
});
