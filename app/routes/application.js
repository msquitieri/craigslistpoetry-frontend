import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    displayPoem(poem) {
      Ember.$('#poem-modal').modal();
      this.transitionTo('poem', poem);
    }
  }
});
