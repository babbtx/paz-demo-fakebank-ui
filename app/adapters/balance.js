import Adapter from './application';

export default Adapter.extend({
  buildURL(modelName, id) {
    if (typeof(id) !== 'undefined') {
      return `${this.host}/accounts/${id}/balances`;
    }
    else {
      return `${this.host}/balances`;
    }
  }
});
