import Route from '@ember/routing/route';

export default Route.extend({
  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.transactions;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model() {
    return this.store.findAll('account', {reload: true});
  },

  actions: {
    refreshTransactions() {
      console.log('Reloading accounts (in transactions route)');
      this.store.unloadAll('account');
      this.refresh();
    }
  }

});
