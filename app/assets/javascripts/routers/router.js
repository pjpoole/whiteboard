Whiteboard.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    var sidebar = new Whiteboard.Views.Sidebar();
  },

  routes: {
    '': 'dashboard',
    'users/new': 'accountCreate',
    // 'users/:id': 'userShow',
    'session/new': 'signIn',
    'sections': 'sectionsIndex',
    'sections/:id': 'sectionShow'
    // 'profile': 'showProfile'
  },

  before: function (route) {
    console.log("route: ", route);
  },

  dashboard: function () {
    var callback = this.dashboard.bind(this);
    if (!this._requireSignedIn(callback)) { return };

    var view = new Whiteboard.Views.Dashboard({
      sections: {
        // TODO: fix
        sections: Whiteboard.currentUser.sections(),
        instructed: Whiteboard.currentUser.sectionsInstructed()
      }
    });

    this._swapView(view);
  },

  sectionsIndex: function () {
    var callback = this.sectionsIndex.bind(this);
    if (!this._requireSignedIn(callback)) { return };

    var allSections = new Whiteboard.Collections.Sections();
    allSections.fetch();

    var view = new Whiteboard.Views.SectionsIndex({
      collection: allSections
    });

    this._swapView(view);
  },

  sectionShow: function (id) {
    var callback = this.sectionShow.bind(this, id);
    if (!this._requireSignedIn(callback)) { return };
    var section = new Whiteboard.Models.Section({ id: id });
    section.fetch();

    var view = new Whiteboard.Views.SectionShow({
      model: section
    });

    this._swapView(view);
  },


  accountCreate: function (callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var newUser = new Whiteboard.Models.User();

    var view = new Whiteboard.Views.UserNew({
      model: newUser,
      dismissable: false
    });

    this._swapView(view);
  },

  signIn: function (callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var view = new Whiteboard.Views.SignIn({
      callback: callback,
      dismissable: false
    });

    this._swapView(view);
  },


  _requireSignedIn: function (callback) {
    if (!Whiteboard.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this)
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function (callback) {
    if (Whiteboard.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function () {
    Backbone.history.navigate('', { trigger: true });
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
    $('.select-after-input').focus();
  }
});
