import DS from "ember-data";

export default DS.Model.extend({
  line_text: DS.attr('string'),
  count: DS.attr('number'),
});
