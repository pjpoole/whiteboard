Whiteboard.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $('#content');

    this.user_id = options.user_id;

    this.sections = new Whiteboard.Collections.Sections({
      user_id: this.user_id
    });
    this.sectionsInstructed = new Whiteboard.Collections.Sections({
      user_id: this.user_id,
      instructs: true
    });
  },

  routes: {
    '': 'dashboard',
    'profile': 'showProfile'
  },

  dashboard: function () {
    var view = new Whiteboard.Views.Dashboard({
      sections: this.sections,
      sectionsInstructed: this.sectionsInstructed
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  }
});
