import Ember from 'ember';
import DS from 'ember-data';

const { String: { pluralize, underscore } } = Ember;

export default DS.RESTAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
