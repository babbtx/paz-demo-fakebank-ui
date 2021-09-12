import DS from "ember-data";

export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    hash['id'] = 'singleton';
    const result = this._super(typeClass, hash);
    return result;
  }
});
