import Ember from 'ember';

export default Ember.Component.extend({
  content: Ember.computed(function() {
    let link = `<a href='http://newyork.craigslist.org/mis/' target='_blank'>Missed Connections</a>`;
    let message = `All we do is select 10 random lines from posts found in NYC Craigslist ${link}. That\'s it!`;

    return message;
  })
});
