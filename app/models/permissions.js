import DS from 'ember-data';

export default DS.Model.extend({
  accounts: DS.attr('boolean'),
  transactions: DS.attr('boolean'),
  transfers: DS.attr('boolean'),
  offers: DS.attr('boolean'),
});
