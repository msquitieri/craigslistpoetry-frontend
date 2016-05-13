import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToPoems() {
      this.transitionToRoute('poems');
    }
  }
});
