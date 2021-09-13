import Route from '@ember/routing/route';

export default Route.extend({
  accountId: null,

  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.transactions;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model(params) {
    this.set('accountId', params.account_id);
    return this.store.query('transaction', {accountId: params.account_id}, {reload: true});
  }
});
