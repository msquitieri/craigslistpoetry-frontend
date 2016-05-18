import Ember from 'ember';
import ENV from 'craigslistpoetry-frontend/config/environment';

export default Ember.Component.extend({
  shareUrlAnchorTag: Ember.computed('poem.id', function() {
    let poemId = this.get('poem.id');
    let defaultHost = ENV.defaultHost;

    return `<a href='/poems/${poemId}'>${defaultHost}/poems/${poemId}</a>`;
  }),

  didInsertElement() {
    this.$('#poem-modal').on('hidden.bs.modal', () => {
      this.sendAction('onModalClose');
    });
  },

  willDestroyElement() {
    this.$('#poem-modal').off('hidden.bs.modal');
  },

  didRender() {
    this.$('#poem-modal').modal('show');
  }
});
