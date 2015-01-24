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
    if (Whiteboard.currentUser.isSignedIn()) {
      return true;
    }
    var defer = $.Deferred();

    $.when(Whiteboard.SessionController.signIn({ defer: defer }))
      .done(function () {
        this.route.apply(this, params);
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
