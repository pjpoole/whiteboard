Whiteboard.Collections.Sections = Backbone.Collection.extend({
  url: function () {
    if (this.instructs) {
      return '/api/users/' + this.user_id + '/sections';
    } else {
      return '/api/users/' + this.user_id + '/enrollments';
    }
  },

  model: Whiteboard.Models.Section,

  initialize: function (options) {
    // debugger
    if (options.instructs) {
      this.instructs = true;
    }
    this.user_id = options.user_id;
  }
});
