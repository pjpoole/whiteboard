Whiteboard.Routers.App = Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    'users/:id': 'userShow',
    'sections': 'sectionsIndex',
    'sections/:id': 'sectionShow',

    'events/:id': 'eventShow',

    'posts/:id': 'postShow'
    // 'profile': 'showProfile'
  },

  initialize: function (options) {
    this.controller = options.controller;
  },

  before: function (route, params) {
    if (sessionChannel.request('user:isSignedIn')) {
      return true;
    }
    var defer = $.Deferred(),
        promise = Whiteboard.SessionController.signIn({ defer: defer }),
        that = this;

    $.when(promise).done(function () {
      that[that.routes[route]].apply(that, params);
    });

    return false;
  },

  dashboard: function () {
    this.controller.dashboard();
  },

  userShow: function (id) {
    this.controller.userShow(id);
  },

  sectionsIndex: function () {
    this.controller.sectionsIndex();
  },

  sectionShow: function (id) {
    this.controller.sectionShow(id);
  },

  eventShow: function (id) {
    this.controller.eventShow(id);
  },

  postShow: function (id) {
    this.controller.postShow(id);
  }
});
