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
  },

  actions: {
    facebookShare() {
      let poemId = this.get('poem.id');
      let url = `${ENV.defaultHost}/poems/${poemId}`;
      let text = `${this.get('poem.previewText')}...`;
      let header = `Craigslist Poetry | Poem ${poemId}`;
      let image = `${ENV.defaultHost}/images/logo_small.png`;

      FB.ui({
        method: 'feed',
        link: url,
        picture: image,
        name: header,
        description: text
      });
    }
  }
});
