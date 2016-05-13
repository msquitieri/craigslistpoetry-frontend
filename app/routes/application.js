import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    displayPoem(poem) {
      this.transitionTo('poem', poem);
    }
  }
});
