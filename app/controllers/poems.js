import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,

  sortedPoems: Ember.computed('model.@each.id', function() {
    if (this.get('model')) {
      return this.get('model').sortBy('id').reverse();
    }
  }),

  actions: {
    loadMorePoems() {
      let nextPage = this.get('page') + 1;
      this.set('page', nextPage);

      this.store.query('poem', { page: nextPage });
    }
  }
});
