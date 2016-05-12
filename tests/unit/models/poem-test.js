import { moduleForModel, test } from 'ember-qunit';

moduleForModel('poem', 'Unit | Model | poem', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// TODO: Get this working...
// test('previewText', function(assert) {
//   let model = this.subject();
//   let lines = [
//     'Hello there',
//     'My name is',
//     'Michael',
//     'what is yours'
//   ];
//
//   model.set('lines', lines);
//
//   let previewText = 'Hello there / My name is / Michael / what is yours';
//   assert.equal(model.get('previewText'), previewText);
// });
