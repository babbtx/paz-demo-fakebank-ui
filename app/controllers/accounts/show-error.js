import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    refresh() {
      this.transitionToRoute("account", this.get("accountId"));
    }
  }
});
