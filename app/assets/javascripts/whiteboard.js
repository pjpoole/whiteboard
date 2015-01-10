window.Whiteboard = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Whiteboard.Routers.Router();

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Whiteboard.initialize();
});
