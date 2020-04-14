import Adapter from './application';

export default Adapter.extend({
  namespace: 'OpenBanking/v2',

  buildURL(modelName, id) {
    if (typeof(id) !== 'undefined') {
      return `${this.host}/${this.namespace}/accounts/${id}/balances`;
    }
    else {
      return `${this.host}/${this.namespace}/balances`;
    }
  }
});
