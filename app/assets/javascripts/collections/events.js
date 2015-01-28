Whiteboard.Collections.Events = Backbone.Collection.extend({
  url: '/api/events',
  model: Whiteboard.Models.Event,

  initialize: function (models, options) {
    this.section = options.section;
  },

  comparator: 'date'
});
