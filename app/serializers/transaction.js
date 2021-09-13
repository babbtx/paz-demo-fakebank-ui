import Serializer from './application';

export default Serializer.extend({
  primaryKey: 'transactionId',
  attrs: {
    amountDetails: 'amount'
  }
})
