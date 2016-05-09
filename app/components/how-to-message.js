import Ember from 'ember';

export default Ember.Component.extend({
  tooltipEvent: 'click',
  tooltipContent: Ember.computed(function() {
    let link = `<a href='http://newyork.craigslist.org/mis/'>Missed Connections</a>`;
    let message = `All we do is select 10 random lines from posts found in NYC Craigslist ${link}. That\'s it!`;

    return message;
  }),
  tooltipPlace: 'bottom'
});
