import Route from '@ember/routing/route';

export default Route.extend({
  accountId: null,

  model(params) {
    this.set('accountId', params.account_id);
    return this.store.query('transaction', {accountId: params.account_id}, {reload: true});
  },

  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('transactions').set('selectedAccountId', this.accountId);
  },

  actions: {
    refreshTransactions() {
      console.log(`Reloading transactions for account ${this.accountId}`);
      this.store.unloadAll('transaction');
      this.refresh();
    }
  }

});
