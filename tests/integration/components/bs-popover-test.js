import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-popover', 'Integration | Component | bs popover', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('text', 'My Text');
  this.set('content', 'My Content');

  this.render(hbs`{{bs-popover text=text content=content}}`);

  assert.equal(this.$().text().trim(), 'My Text');
});
