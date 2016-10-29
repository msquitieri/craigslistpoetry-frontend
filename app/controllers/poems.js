import Ember from "ember";
import ENV from "../config/environment";

export default Ember.Controller.extend({
  page: 1,

  cableService: Ember.inject.service('cable'),
  notifications: Ember.inject.service('notification-messages'),

  setupConsumer: Ember.on('init', function() {
    var consumer = this.get('cableService').createConsumer(ENV.websocketUrl);
    var controller = this;

    consumer.subscriptions.create("PoemChannel", {
      connected() {
        Ember.debug('[PoemChannel] -- connected');
      },

      received(data) {
        var parsedData = JSON.parse(data);
        Ember.debug("received(data) -> " + Ember.inspect(parsedData));

        if (!controller.store.peekRecord('poem', parsedData.id)) {
          controller.send('sendNotification', `A new poem was just created.`, (notification) => {
            controller.get('notifications').removeNotification(notification);
            controller.transitionToRoute('poem', parsedData.id);
          });
        }
      },

      disconnected() {
        Ember.debug("[PoemChannel] -- disconnected");
      }
    });
  }),

  sortedPoems: Ember.computed('model.@each.id', function() {
    if (this.get('model')) {
      return this.get('model').sortBy('id').reverse();
    }
  }),

  actions: {
    loadMorePoems() {
      if (this.get('loadingMorePoems')) {
        return;
      }

      let nextPage = this.get('page') + 1;
      this.set('page', nextPage);

      this.set('loadingMorePoems', true);

      this.store.query('poem', { page: nextPage }).then(() => {
        this.set('loadingMorePoems', false);
      });
    }
  }
});
