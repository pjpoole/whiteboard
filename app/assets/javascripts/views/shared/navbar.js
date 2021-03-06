Whiteboard.Views.Navbar = Mn.ItemView.extend({
  tagName: 'nav',
  className: 'navbar navbar-default navbar-fixed-top',
  template: JST['shared/navbar'],
  templateHelpers: function () {
    return {
      userId: this.model.id,
      userName: this.model.escape('name')
    };
  },

  events: {
    'click .sign-out': 'signOut'
  },

  initialize: function (options) {
    this.model = Whiteboard.currentUser;

    this.$el.animate({ top: "-=70" }, 0);
    this.listenTo(eventChannel, 'signIn', this.unhide);
    this.listenTo(eventChannel, 'signOut', this.hide);
    this.listenTo(this.model, 'change', this.render);
  },

  signOut: function (ev) {
    ev.preventDefault();
    eventChannel.command('signOut:requested');
  },

  hide: function () {
    this.$el.animate({
      top: "-=70"
    }, 500, "linear", function () {
      this.$el.empty();
    }.bind(this));
  },

  unhide: function () {
    this.render();
    this.$el.animate({
        top: "+=70"
      }, 500, "linear"
    );
  }
});
