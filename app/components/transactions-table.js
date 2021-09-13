import Component from '@ember/component';
import BootstrapTheme from 'ember-models-table/themes/bootstrap4';

const Theme = BootstrapTheme.extend({
  components: {
    'global-filter': 'bootstrap4-global-filter',
  },
  messages: {
    noDataToShow: "Loading..."
  }
});

const theme = new Theme();

export default Component.extend({
  classNames: ['transactions-table'],
  theme: theme,

  columns: [
    {propertyName: 'bookingDateTime', title: 'Date', className: 'table-column-date', component: 'table-date-cell'},
    {propertyName: 'merchantName', title: 'Merchant', className: 'table-column-merchant'},
    {propertyName: 'transactionInformation', title: 'Description', className: 'table-column-description'},
    {propertyName: 'amount', title: 'Amount', className: 'table-column-amount', component: 'table-amount-cell'},
  ]
});
