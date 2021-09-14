import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  buildURL() {
    if (ENV.PERMISSIONS_URL) {
      return ENV.PERMISSIONS_URL;
    }
    else {
      return undefined;
    }
  },

  queryRecord() {
    if (ENV.PERMISSIONS_URL) {
      return this._super(...arguments);
    }
    else {
      // default permissions
      return {
        id: 'default',
        accounts: true,
        transactions: true,
        transfers: true,
        offers: false
      }
    }
  }
});
