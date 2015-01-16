Whiteboard.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $('#content');

    this.user_id = options.user_id;

    this.sections = new Whiteboard.Collections.SectionsEnrolled([], {
      user_id: this.user_id
    });
    this.sectionsInstructed = new Whiteboard.Collections.SectionsInstructed([], {
      user_id: this.user_id
    });
  },

  routes: {
    '': 'dashboard',
    'sections': 'sectionsIndex',
    'sections/:id': 'sectionShow'
    // 'profile': 'showProfile'
  },

  dashboard: function () {
    this.sections.fetch();

  dashboard: function () {
    var callback = this.dashboard.bind(this);
    if (!this._requireSignedIn(callback)) { return };

    var view = new Whiteboard.Views.Dashboard({
      sections: {
        'sections': this.sections,
        'instructed': this.sectionsInstructed
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
    var callback = this.sectionsShow.bind(this);
    if (!this._requireSignedIn(callback)) { return };

    var section = new Whiteboard.Models.Section({ id: id });
    section.fetch();

    var view = new Whiteboard.Views.SectionShow({
      model: section
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
    this.$rootEl.html(view.render().$el)
  }
});
