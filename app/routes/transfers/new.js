import Route from '@ember/routing/route';

export default Route.extend({
  isPermitted() {
    const permissions = this.modelFor('authenticated');
    return !!permissions.transfers;
  },

  beforeModel() {
    if (!this.isPermitted()) {
      this.replaceWith('');
    }
  },

  model() {
    if (this.get("copyOfRecentTransfer")) {
      const copyOfRecentTransfer = this.get("copyOfRecentTransfer");
      this.set("copyOfRecentTransfer", null);
      return copyOfRecentTransfer;
    }
    else {
      return this.store.createRecord("transfer");
    }
  },

  cloneModel() {
    const model = this.modelFor(this.routeName);
    const copy = this.store.createRecord("transfer");
    model.eachAttribute(attr => copy.set(attr, model.get(attr)));
    return copy;
  },

  actions: {
    submitTransfer() {
      const model = this.modelFor(this.routeName);
      const copyOfRecentTransfer = this.cloneModel();
      model.save()
        .then(() => {
          this.set("copyOfRecentTransfer", copyOfRecentTransfer);
          this.refresh();
        });
    }
  }
});
