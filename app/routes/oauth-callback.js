import Route from '@ember/routing/route';
import Error from '@ember/error';
import OAuth2ImplicitGrantCallbackMixin from 'ember-simple-auth/mixins/oauth2-implicit-grant-callback-route-mixin';

export default Route.extend(OAuth2ImplicitGrantCallbackMixin, {
  authenticator: 'authenticator:oauth2-implicit',

  model() {
    // the mixin expects to get the parsed hash from the URL in activate()
    // but we've changed app behavior to not redirect into Ember and instead
    // redirect to a static html page that saves the parsed hash to local storage.

    // load that here and complete the authentication with that.
    const encodedHash = window.localStorage.getItem('fakebank-ui-oauth-hash');
    const parsedHash = encodedHash ? JSON.parse(encodedHash) : {error: 'Hmm, something went wrong.'};

    // clear what was there
    window.localStorage.setItem('fakebank-ui-oauth-hash', '');

    // prefer the error description
    // not sure whether that's a standard thing or a PingOne thing
    if (parsedHash.error && parsedHash.error_description) {
      parsedHash.error = parsedHash.error_description;
    }

    // the advantage of doing all of this in model() is that errors can propagate
    // like normal errors in Ember, but we need to wrap it in an Ember.Error
    const authenticator = this.get('authenticator');
    return this.get('session').authenticate(authenticator, parsedHash).catch((err) => {
      throw new Error(err);
    });
  },

  activate() {
  },

  didTransition() {
    this.transitionTo(this.get('routeAfterAuthentication'));
  }
});
