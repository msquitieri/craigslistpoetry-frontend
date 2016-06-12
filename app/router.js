import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('poems', { path: '/'}, function() {
    this.route('poem', { path: '/poems/:id', resetNamespace: true });
  });

  this.route('not_found', { path: '/*notfound'});
});

export default Router;
