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

    this.loadTwitterShareButton();
  },

  willDestroyElement() {
    this.$('#poem-modal').off('hidden.bs.modal');
  },

  didRender() {
    this.$('#poem-modal').modal('show');
  },

  loadTwitterShareButton() {
    let poemId = this.get('poem.id');
    let defaultHost = ENV.defaultHost;

    let url = `${defaultHost}/poems/${poemId}`;
    let elem = this.$('.twitter-tweet-holder').get(0);
    let text = this.get('poem').getPreviewText(90) + '...';

    twttr.widgets.createShareButton(url, elem,
      function (e1) {
        console.log("Button Created");
      },
      {
        count : "none",
        text : text,
        via : "craigslistpoems"
      }
    );
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
