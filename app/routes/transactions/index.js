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
});
