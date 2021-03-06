import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('transactions').set('selectedAccountId', null);
  }
})
