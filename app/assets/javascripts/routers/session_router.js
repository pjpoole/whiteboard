Whiteboard.Routers.Session = Backbone.Router.extend({
  routes: {
    'signin': 'signIn',
    'register': 'register'
  },

  initialize: function () {
    this.listenTo(eventChannel, 'signOut', this.signIn);
  },

  before: function () {
    if (eventChannel.request('user:isSignedIn')) {
      return true;
    } else {
      Backbone.history.navigate('', { trigger: true });
      return false;
    }
  },

  signIn: function () {
    Whiteboard.SessionController.signIn();
  },

  register: function () {
    Whiteboard.SessionController.register();
  }

});
