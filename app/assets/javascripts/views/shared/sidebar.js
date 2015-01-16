Whiteboard.Views.Sidebar = Backbone.View.extend({
  tagName: 'nav',
  className: 'nav sidebar',
  template: JST['shared/sidebar'],

  events: {
    'click .sign-out': 'remove'
  },

  initialize: function (options) {
    this.listenTo(Whiteboard.currentUser, 'signIn', this.render);
    this.listenTo(Whiteboard.currentUser, 'signOut', this.remove);
  },

  render: function () {
    var content = this.template({
      currentUser: Whiteboard.currentUser
    });
    $('body').prepend(this.$el.html(content));

    return this;
  }
});
