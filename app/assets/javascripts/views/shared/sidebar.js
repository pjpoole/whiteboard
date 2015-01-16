Whiteboard.Views.Sidebar = Backbone.View.extend({
  tagName: 'nav',
  className: 'nav sidebar',
  template: JST['shared/sidebar'],

  events: {
    'click .sign-out': 'signOut'
  },

  initialize: function (options) {
    this.$el.animate({left: "-=200"}, 0);
    this.listenTo(Whiteboard.currentUser, 'signIn', this.render);
    this.listenTo(Whiteboard.currentUser, 'signOut', this.hide);
  },

  signOut: function () {
    Whiteboard.currentUser.signOut({
      success: function () {
        Backbone.history.navigate('session/new', { trigger: true })
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

  render: function () {
    var content = this.template({
      currentUser: Whiteboard.currentUser
    });

    this.$el.animate({
        left: "+=200"
      }, 500, "linear"
    );

    $('body').prepend(this.$el.html(content));

    return this;
  }
});
