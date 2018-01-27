import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    year: Ember.computed(function() {
        return moment().format('YYYY');
    }),
});
