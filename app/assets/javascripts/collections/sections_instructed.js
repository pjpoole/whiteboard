var eventChannel = Backbone.Radio.channel('event');

Whiteboard.Collections.SectionsInstructed = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/sections';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(eventChannel, 'signIn', this.setUserId);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },
});
