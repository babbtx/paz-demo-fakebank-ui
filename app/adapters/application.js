import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth-bearer',

  pathForType(type) {
    return pluralize(underscore(type));
  }
});
