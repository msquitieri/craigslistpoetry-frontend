import Ember from 'ember';

export default Ember.Controller.extend({

  sortedPoems: Ember.computed('model.@each.id', function() {
    if (this.get('model')) {
      return this.get('model').sortBy('id').reverse();
    }
  }),

  actions: {
    displayPoem(poem) {
      console.log(poem.id);
    }
  }
});
