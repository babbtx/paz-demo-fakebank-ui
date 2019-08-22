import Component from '@ember/component';
import { computed } from '@ember/object';
import BootstrapTheme from 'ember-models-table/themes/bootstrap4';

const Theme = BootstrapTheme.extend({
  components: {
    'global-filter': 'bootstrap4-global-filter',
  }
});

const theme = new Theme();

export default Component.extend({
  theme: theme,

  columns: [
    {propertyName: 'accountId'},
    {propertyName: 'accountSubType'},
    {propertyName: 'sortCode'},
  ],

});
