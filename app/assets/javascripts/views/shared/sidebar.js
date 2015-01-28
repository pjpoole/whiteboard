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
    this.listenTo(eventChannel, 'signIn', this.unhide);
    this.listenTo(eventChannel, 'signOut', this.hide);
    this.listenTo(this.model, 'sync', this.render);
  },

  signOut: function () {
    eventChannel.command('signOut:requested');
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
