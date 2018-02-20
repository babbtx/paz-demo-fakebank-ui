import Controller from '@ember/controller';

export default Controller.extend({
  // session from ember-simple-auth
  // https://github.com/simplabs/ember-simple-auth
  session: Ember.inject.service('session')
});
