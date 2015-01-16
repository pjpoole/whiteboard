window.Whiteboard = {
  Utils: {},
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new Whiteboard.Models.CurrentUser();
    this.currentUser.fetch();

    Whiteboard.router = new Whiteboard.Routers.Router({
      $rootEl: $('#content')
    });

    Backbone.history.start();
  }
};
