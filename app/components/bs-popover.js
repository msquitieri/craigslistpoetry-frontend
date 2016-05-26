import Ember from 'ember';

export default Ember.Component.extend({
  content: null,
  placement: 'bottom',

  didInsertElement() {
    this.displayPopover();
  },

  willDestroyElement() {
    this.$().popover('destroy');
  },

  displayPopover() {
    this.$().popover('destroy');

    this.$().popover({
      content: this.get('content'),
      placement: this.get('placement'),
      html: true
    });
  },

  onContentChange: Ember.observer('content', 'placement', 'text', function() {
    this.displayPopover();
  })

});
