Whiteboard.Collections.Events = Backbone.Collection.extend({
  url: '/api/events',
  model: Whiteboard.Models.Event,

  initialize: function (models, options) {
    options || (options = {});
    this.section = options.section;
  },

  getOrFetch: function (id) {
    var eventMaybe = this.get(id);

    if (!eventMaybe) {
      eventMaybe = new Whiteboard.Models.Event({ id: id});
      eventMaybe.fetch({
        success: function () {
          this.add(eventMaybe);
        }.bind(this)
      });
    }

    return eventMaybe;
  },

  comparator: 'date'
});
