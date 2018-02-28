import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: ENV.backend,
  authorizer: 'authorizer:oauth-bearer',

  pathForType(type) {
    return pluralize(underscore(type));
  }
});
