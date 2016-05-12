import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  created_at: DS.attr('date'),
  lines: DS.attr(),

  previewText: Ember.computed('lines.length', function() {
    return this.getPreviewText(100);
  }),

  getPreviewText(maxLength=100) {
    let cleanedLines = this.get('lines').map((line) => {
      line = line + '';
      line = line.replace(/<br>/g, ' ');
      line = line.replace(/  */g, ' ').trim();

      return line;
    });

    let previewText = cleanedLines.join(' / ');

    previewText = previewText.substring(0, maxLength);
    let posOfLastSpace = previewText.lastIndexOf(' ');

    if (posOfLastSpace !== -1) {
      previewText = previewText.substring(0, posOfLastSpace);
    }

    return previewText;
  }
});
