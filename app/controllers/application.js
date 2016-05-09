import Ember from 'ember';

export default Ember.Controller.extend({
  scroller: Ember.inject.service(),

  actions: {
    createNewPoem() {
      return this.store.createRecord('poem').save();
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
