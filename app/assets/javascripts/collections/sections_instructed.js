Whiteboard.Collections.SectionsInstructed = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/sections';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(Whiteboard.eventChannel, 'signIn', this.setUserId);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },
});
