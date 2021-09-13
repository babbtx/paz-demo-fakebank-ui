import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  namespace: ENV.OPEN_BANKING_API_NAMESPACE,

  urlForQuery(query) {
    if (query.accountId) {
      return `${this.host}/${this.namespace}/accounts/${query.accountId}/transactions`;
    }
    else {
      return this._super(...arguments);
    }
  }
});
