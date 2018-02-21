import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Route.extend(UnauthenticatedRouteMixin, {
  beforeModel() {
    const url = "https://pf.babbtx.work:9031/as/authorization.oauth2"
      + "?client_id=fakebank-ui"
      + `&redirect_uri=${window.location.origin}/oauth-callback`
      + "&response_type=token+id_token";
    window.location.replace(url);
  }
});
