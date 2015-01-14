window.Whiteboard = {
  Utils: {},
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    new Whiteboard.Routers.Router({ user_id: options.user_id });

    Backbone.history.start();
  }
};
