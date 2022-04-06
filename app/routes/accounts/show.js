import Route from '@ember/routing/route';
import RSVP  from 'rsvp';

export default Route.extend({
  accountId: null,

  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.accounts;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model(params) {
    this.set('accountId', params.account_id);

    return RSVP.hashSettled({
      account: this.store.findRecord('account', params.account_id, {reload: true}),
      balance: this.store.findRecord('balance', params.account_id, {reload: true})
    }).then(function(hash) {
      if (hash.account.value) {
        return hash;
      }
      else {
        return RSVP.reject(hash.account.reason);
      }
    })
  },

  setupController(controller, hash) {
    controller.set('accountId', this.accountId);
    controller.set('account', hash.account.value);
    if (hash.balance.value) {
      controller.set('balance', hash.balance.value);
    }
  },

  actions: {
    refreshAccount() {
      console.log('Reloading account');
      this.refresh();
    },
    error(error) {
      // HACK passing the accountId to the error route via the error object
      error.accountId = this.accountId;
      return true;
    }
  }
});
