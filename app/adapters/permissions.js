import Adapter from './application';

export default Adapter.extend({
  namespace: 'private',

  buildURL() {
    return `${this.host}/private/permissions`;
  }
});
