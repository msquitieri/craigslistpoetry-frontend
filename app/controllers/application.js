import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewPoem() {
      return this.store.createRecord('poem').save();
    }
  }
});
