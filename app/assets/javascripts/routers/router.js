Whiteboard.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $('#content');

    this.user_id = options.user_id;

    this.sections = new Whiteboard.Collections.Sections([], {
      user_id: this.user_id
    });
    this.sectionsInstructed = new Whiteboard.Collections.SectionsInstructed([], {
      user_id: this.user_id
    });
  },

  routes: {
    '': 'dashboard',
    'sections/new': 'createSection',
    'sections/:id': 'showSection'
    // 'profile': 'showProfile'
  },

  dashboard: function () {
    this.sections.fetch();

    this.sectionsInstructed.fetch();

    var view = new Whiteboard.Views.Dashboard({
      sections: {
        'sections': this.sections,
        'instructed': this.sectionsInstructed
      }
    });

    this._swapView(view);
  },

  createSection: function () {
    var section = new Whiteboard.Models.Section();

    var view = new Whiteboard.Views.SectionModal({
      model: section
    });
    $('body').prepend(view.render().$el);
    view.delegateEvents();
  },

  showSection: function (id) {
    var section = new Whiteboard.Models.Section({ id: id });

    section.fetch();

    var view = new Whiteboard.Views.SectionShow({
      model: section
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  }
});
