Whiteboard.Collections.Events = Backbone.Collection.extend({
  url: '/api/events',
  model: Whiteboard.Models.Event,

  initialize: function (models, options) {
    this.section = options.section;
    this.sortVar = 'date';
    this.sign = 1;
  },

  comparator: function (event1, event2) {
    var sortVar = this.sortVar;
    if (event1.get(sortVar) < event2.get(sortVar)) {
      return this.sign * 1;
    } else if (event1.get(sortVar) > event2.get(sortVar)) {
      return this.sign * -1;
    } else {
      return 0;
    }
  }
});
