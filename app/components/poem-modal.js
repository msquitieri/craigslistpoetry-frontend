import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this.$('#poem-modal').on('hidden.bs.modal', () => {
      this.sendAction('onModalClose');
    });

    this.$(document).on('keydown', (e) => {
      // Left Key
      if (e.which === 37) {
        this.send('goToPreviousPoem');
      } else if (e.which === 39) { // Right Key
        this.send('goToNextPoem');
      }
    });
  },

  willDestroyElement() {
    this.$('#poem-modal').off('hidden.bs.modal');

    this.$(document).off('keydown');
  },

  didRender() {
    this.$('#poem-modal').modal('show');
  },

  actions: {
    goToPreviousPoem() {
      let newId = parseInt(this.get('poem.id')) + 1;

      this.sendAction('moveToNewPoem', newId);
    },

    goToNextPoem() {
      let newId = parseInt(this.get('poem.id')) - 1;

      this.sendAction('moveToNewPoem', newId);
    }
  }
});
