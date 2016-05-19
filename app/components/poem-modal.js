import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this.$('#poem-modal').on('hidden.bs.modal', () => {
      this.sendAction('onModalClose');
    });
  },

  willDestroyElement() {
    this.$('#poem-modal').off('hidden.bs.modal');
  },

  didRender() {
    this.$('#poem-modal').modal('show');
  }
});
