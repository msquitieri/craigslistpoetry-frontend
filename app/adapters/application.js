import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost,
  namespace: 'api/v1',

  headers: {
    'X-api-key': ENV.apiKey
  }
});
