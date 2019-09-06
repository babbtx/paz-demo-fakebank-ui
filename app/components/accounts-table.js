import Component from '@ember/component';
import { computed } from '@ember/object';
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
  theme: theme,

  columns: [
    {propertyName: 'accountId', component: 'table-account-id-cell'},
    {propertyName: 'accountType'},
    {propertyName: 'accountSubType'},
    {propertyName: 'sortCode'},
  ]
});
