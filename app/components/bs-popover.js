import Ember from 'ember';

export default Ember.Component.extend({
  content: null,
  placement: 'bottom',

  didInsertElement() {
    this.$().popover({
      content: this.get('content'),
      placement: this.get('placement'),
      html: true
    });
  }

});
