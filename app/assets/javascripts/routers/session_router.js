Whiteboard.Routers.Session = Backbone.Router.extend({
  routes: {
    'signin': 'signIn',
    'register': 'register'
  },

  before: function () {
    if (!Whiteboard.currentUser.isSignedIn()) {
      return true;
    }

    Backbone.history.navigate('', { trigger: true });
    return false;
  },

  signIn: function () {
    Whiteboard.SessionController.signIn();
  },

  register: function () {
    Whiteboard.SessionController.register();
  }

});
