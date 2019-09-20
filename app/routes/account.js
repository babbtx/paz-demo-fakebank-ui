import Route from '@ember/routing/route';
import RSVP  from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hashSettled({
      account: this.store.findRecord('account', params.account_id),
      balance: this.store.findRecord('balance', params.account_id)
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
    controller.set('account', hash.account.value);
    if (hash.balance.value) {
      controller.set('balance', hash.balance.value);
    }
  }
});
