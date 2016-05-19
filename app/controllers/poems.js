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

      this.set('loadingMorePoems', true);

      this.store.query('poem', { page: nextPage }).then(() => {
        this.set('loadingMorePoems', false);
      });
    }
  }
});
