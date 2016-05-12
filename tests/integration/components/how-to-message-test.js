import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('how-to-message', 'Integration | Component | how to message', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{how-to-message}}`);

  assert.equal(this.$().text().trim(), 'How do we generate poems?');
});
