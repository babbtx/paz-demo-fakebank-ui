import Route from '@ember/routing/route';

export default Route.extend({
  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.offers;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model() {
    return this.store.findAll("offer", {reload: true});
  },

  actions: {
    refreshOffers() {
      this.store.unloadAll("offer");
      this.refresh();
    }
  }
});
