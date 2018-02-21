import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', {path: 'app'}, function() {
    this.route('transactions', {resetNamespace: true});
  });
  this.route('login');
  this.route('oauth-callback');
});

export default Router;
