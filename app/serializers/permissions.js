import DS from "ember-data";

export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    if (typeof(hash['id']) === 'undefined') {
      hash['id'] = 'singleton';
    }
    const result = this._super(typeClass, hash);
    return result;
  }
});
