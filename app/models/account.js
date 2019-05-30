import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  accountId: DS.attr('number'),
  accountSubType: DS.attr('string'),
  account: DS.attr(),
  sortCode: alias('account.identification')
});