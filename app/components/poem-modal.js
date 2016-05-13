import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('#poem-modal').on('hide.bs.modal', () => {
      this.sendAction('onModalClose');
    });
  },

  willDestroyElement() {
    this.$('#poem-modal').off('hide.bs.modal');
  },

  didRender() {
    this.$('#poem-modal').modal('show');
  }
});
