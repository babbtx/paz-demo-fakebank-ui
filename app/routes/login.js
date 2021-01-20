import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import ENV from '../config/environment';

export default Route.extend(UnauthenticatedRouteMixin, {
  beforeModel() {
    const url = `${ENV.OAUTH2_AUTHORIZATION_URL}?client_id=${ENV.OAUTH2_CLIENT_ID}`
      + `&redirect_uri=${encodeURIComponent(window.location.origin + ENV.rootURL + '#/oauth-callback')}`
      + "&scope=accounts"
      + "&prompt=login"
      + "&response_type=token"
      + `&nonce=${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`
    ;
    window.location.replace(url);
  }
});
