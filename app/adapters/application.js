import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';
import DS from 'ember-data';


export default DS.RESTAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
