import Ember from 'ember';

export default Ember.Controller.extend({
  scroller: Ember.inject.service(),
  creatingPoem: false,

  actions: {
    createNewPoem() {
      this.set('creatingPoem', true);

      return this.store.createRecord('poem').save().then((poem) => {
        this.send('displayPoem', poem);

        this.set('creatingPoem', false);
      });
    },

    scrollTo(selector) {
      let $element = Ember.$(selector);
      let options = {
        duration: 500,
        offset: -70
      };

      this.get('scroller').scrollVertical($element, options);
    }
  }
});
