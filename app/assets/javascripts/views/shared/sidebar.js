Whiteboard.Views.Sidebar = Backbone.View.extend({
  tagName: 'nav',
  className: 'nav sidebar',
  template: JST['shared/sidebar'],

  events: {
    'click .sign-out': 'signOut'
  },

  initialize: function (options) {
    this.listenTo(Whiteboard.currentUser, 'signIn', this.render);
    this.listenTo(Whiteboard.currentUser, 'signOut', this.remove);
  },

  signOut: function () {
    Whiteboard.currentUser.signOut({
      success: function () {
        Backbone.history.navigate('session/new', { trigger: true })
      }
    });
  },

  render: function () {
    var content = this.template({
      currentUser: Whiteboard.currentUser
    });
    $('body').prepend(this.$el.html(content));

    return this;
  }
});
