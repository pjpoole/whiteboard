Whiteboard.Routers.App = Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    // 'users/:id': 'userShow',
    'sections': 'sectionsIndex',
    'sections/:id': 'sectionShow',

    'events/:id': 'eventShow'
    // 'profile': 'showProfile'
  },

  before: function (route, params) {
    if (eventChannel.request('user:isSignedIn')) {
      return true;
    }
    var defer = $.Deferred(),
        promise = Whiteboard.SessionController.signIn({ defer: defer }),
        that = this;

    $.when(promise).done(function () {
      that[that.routes[route]].apply(this, params);
    });

    return false;
  },

  dashboard: function () {
    Whiteboard.AppController.dashboard();
  },

  sectionsIndex: function () {
    Whiteboard.AppController.sectionsIndex();
  },

  sectionShow: function (id) {
    Whiteboard.AppController.sectionShow(id);
  },

  eventShow: function (id) {
    Whiteboard.AppController.eventShow(id);
  }
});
