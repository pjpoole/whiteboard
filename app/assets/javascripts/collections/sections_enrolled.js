Whiteboard.Collections.SectionsEnrolled = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/enrollments';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(Whiteboard.currentUser, 'signIn', this.setUserId);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },

  enroll: function (section) {
    this.create(section);
  }
});
