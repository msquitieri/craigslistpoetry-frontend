import Ember from "ember";

export default Ember.Route.extend({
  notifications: Ember.inject.service('notification-messages'),

  actions: {
    sendNotification(message) {
      this.get('notifications').success(message, {
        autoClear: true,
        clearDuration: 2000
      });
    },

    displayPoem(poem) {
      this.transitionTo('poem', poem);
    }
  }
});
