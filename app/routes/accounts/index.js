import Route from '@ember/routing/route';

export default Route.extend({
  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.accounts;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model() {
    return this.store.findAll("account", {reload: true});
  },

  actions: {
    refreshAccounts() {
      this.store.unloadAll("account");
      this.refresh();
    }
  }
});
