Whiteboard.Routers.Session = Backbone.Router.extend({
  routes: {
    'signin': 'signIn',
    'register': 'register'
  },

  signIn: function () {
    Whiteboard.SessionController.signIn();
  },

  register: function () {
    Whiteboard.SessionController.register();
  }

});
