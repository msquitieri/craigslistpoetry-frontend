import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToPoems() {
      this.transitionToRoute('poems');
    },

    moveToNewPoem(id) {
      if (this.store.peekRecord('poem', id)) {
        this.transitionToRoute('poem', id);
      }
    }
  }
});
