import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  namespace: ENV.openbanking_base_path,

  buildURL(modelName, id) {
    if (typeof(id) !== 'undefined') {
      return `${this.host}/${this.namespace}/accounts/${id}/balances`;
    }
    else {
      return `${this.host}/${this.namespace}/balances`;
    }
  }
});
