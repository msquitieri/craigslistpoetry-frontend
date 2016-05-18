import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    twttr.widgets.load(this.$('.twitter-timeline').get());
  }
});
