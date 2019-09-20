import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { isPresent } from '@ember/utils';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: ENV.backend,

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
  },

  pathForType(type) {
    return pluralize(type);
  }
});
