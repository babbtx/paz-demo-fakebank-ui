import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  columns: computed(function() {
    if (this.transactions.get('length') > 0) {
      return [
        {propertyName: 'posted'},
        {propertyName: 'description'},
        {propertyName: 'amount'},
        {propertyName: 'confirmation'},
      ];
    }
    else {
      return [
        {propertyName: 'posted'},
        {propertyName: 'description'},
        {propertyName: 'amount'},
        {propertyName: 'confirmation'},
      ];
    }
  })
});
