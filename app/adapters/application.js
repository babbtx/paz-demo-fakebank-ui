import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: ENV.backend,
  history: service('api-history'),

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
  },

  pathForType(type) {
    return pluralize(type);
  },

  handleResponse(status, headers, payload, requestData) {
    this.get('history').add(requestData.method, requestData.url, status, payload);
    return this._super(...arguments);
  }
});
