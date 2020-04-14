import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', {path: 'app'}, function() {
    this.route('accounts', {resetNamespace: true}, function() {
      this.route('show', {path: ':account_id'});
    }),
    this.route('transfers', {resetNamespace: true}, function() {
      this.route('new', {path: ''});
    })
  });
  this.route('login');
  this.route('logout');
  this.route('oauth-callback');
});

export default Router;
