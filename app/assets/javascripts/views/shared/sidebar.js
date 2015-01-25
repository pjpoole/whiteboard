Whiteboard.Views.Sidebar = Mn.ItemView.extend({
  tagName: 'nav',
  className: 'nav sidebar',
  template: JST['shared/sidebar'],

  events: {
    'click .sign-out': 'signOut'
  },

  initialize: function (options) {
    this.model = Whiteboard.currentUser;

    this.$el.animate({left: "-=200"}, 0);
    this.listenTo(Whiteboard.currentUser, 'signIn', this.unhide);
    this.listenTo(Whiteboard.currentUser, 'signOut', this.hide);
  },

  signOut: function () {
    Whiteboard.currentUser.signOut({
      success: function () {
        Backbone.history.navigate('signin', { trigger: true })
      }
    });
  },

  hide: function () {
    this.$el.animate({
      left: "-=200"
    }, 500, "linear", function () {
      this.$el.empty();
    }.bind(this));
  },

  unhide: function () {
    this.render();
    this.$el.animate({
        left: "+=200"
      }, 500, "linear"
    );
  }
});
