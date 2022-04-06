import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  selectedAccountId: null,

  isAccountSelected: computed('selectedAccountId', function() {
    return !!this.selectedAccountId;
  }),

  actions: {
    refresh() {
      this.send("refreshTransactions");
    }
  }
});
