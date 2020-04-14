import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord("transfer");
  },

  setupController(controller, model) {
    this.set("transfer", model);
    return this._super(...arguments);
  },

  actions: {
    submitTransfer() {
      this.get("transfer").save().catch(function() {});
    }
  }
});
