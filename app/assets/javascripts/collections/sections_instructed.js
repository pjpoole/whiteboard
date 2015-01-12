Whiteboard.Collections.SectionsInstructed = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/sections';
  },

  model: Whiteboard.Models.Section,

  initialize: function (models, options) {
    this.user_id = options.user_id;
  }
});
