import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poem-modal', 'Integration | Component | poem modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poem-modal}}`);

  let facebookIndex = this.$().text().trim().indexOf('Facebook');

  assert.equal(facebookIndex > -1, true);
});

