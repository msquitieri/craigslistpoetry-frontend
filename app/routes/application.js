import Ember from "ember";

export default Ember.Route.extend({
  notifications: Ember.inject.service('notification-messages'),

  actions: {
    sendNotification(message, onClick) {
      this.get('notifications').success(message, {
        autoClear: true,
        onClick
      });
    },

    displayPoem(poem) {
      this.transitionTo('poem', poem);
    }
  }
});
