Whiteboard.Collections.SectionsEnrolled = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/enrollments';
  },

  model: Whiteboard.Models.Section,

  initialize: function (models, options) {
    console.log(options)
    this.user_id = options.user_id;
  },

  enroll: function (section) {
    this.create(section);
  }
});
