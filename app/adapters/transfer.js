import Adapter from './application';

export default Adapter.extend({
  namespace: 'private',

  createRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    let url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

    // Ember Data requires ids on objects but this API is "create only", returning 204 (no response data)
    // So one way to fix this is to set an id on the object before we POST it to the server
    // I'm sure this creates a memory leak
    snapshot.record.set("id", `${Date.now()}`);

    serializer.serializeIntoHash(data, type, snapshot, { includeId: false });

    return this.ajax(url, 'POST', { data: data });
  }
});
