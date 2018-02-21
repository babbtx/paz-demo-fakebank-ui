import DS from 'ember-data';
import _ from 'lodash';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // deal with SCIM style list response
    if (_.isObject(payload) && _.isArray(payload.Resources)) {
      payload = payload.Resources;
    }
    const result = this._super(store, primaryModelClass, payload, id, requestType);
    return result;
  }
});
