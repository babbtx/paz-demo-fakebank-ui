import Adapter from './application';
import ENV from '../config/environment';

export default Adapter.extend({
  namespace: ENV.openbanking_base_path,
});
