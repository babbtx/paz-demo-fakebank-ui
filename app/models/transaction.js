import DS from 'ember-data';
import { alias } from '@ember/object/computed';

export default DS.Model.extend({
  transactionInformation: DS.attr('string'), // description
  amountDetails: DS.attr(), // renamed in serializer from 'amount'
  amount: alias('amountDetails.amount'),
  merchantDetails: DS.attr(),
  merchantName: alias('merchantDetails.merchantName'),
  bookingDateTime: DS.attr('date'),
});
