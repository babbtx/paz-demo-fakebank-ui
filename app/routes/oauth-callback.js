import Route from '@ember/routing/route';
import OAuth2ImplicitGrantCallbackMixin from 'ember-simple-auth/mixins/oauth2-implicit-grant-callback-route-mixin';

export default Route.extend(OAuth2ImplicitGrantCallbackMixin, {
  authenticator: 'authenticator:oauth2-implicit',
  activate() {
    // overrides the mixin to not get the parsed hash from the URL
    // instead get it from local storage, which is set by oauth-callback.html
    const authenticator = this.get('authenticator');
    const encodedHash = window.localStorage.getItem('fakebank-ui-oauth-hash');
    const parsedHash = encodedHash ? JSON.parse(encodedHash) : {error: 'Hmm, something went wrong.'};
    window.localStorage.setItem('fakebank-ui-oauth-hash', '');
    // prefer the error description
    if (parsedHash.error && parsedHash.error_description) {
      parsedHash.error = parsedHash.error_description;
    }
    this.get('session').authenticate(authenticator, parsedHash).catch((err) => {
      this.set('error', err);
      this.set('controller.error', err);
    });
  },
  didTransition() {
    if (!this.get('error')) {
      this.transitionTo(this.get('routeAfterAuthentication'));
    }
  }
});
