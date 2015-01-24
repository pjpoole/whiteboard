Whiteboard.Controllers.App = Mn.Controller.extend({
  dashboard: function () {
    var view = new Whiteboard.Views.Dashboard({
      sections: {
        // TODO: fix
        sections: Whiteboard.currentUser.sections(),
        instructed: Whiteboard.currentUser.sectionsInstructed()
      }
    });
  },

  sectionsIndex: function () {
    var allSections = new Whiteboard.Collections.Sections();
    allSections.fetch();

    var view = new Whiteboard.Views.SectionsIndex({
      collection: allSections
    });
  },

  sectionShow: function (id) {
    var section = new Whiteboard.Models.Section({ id: id });
    section.fetch();

    var view = new Whiteboard.Views.SectionShow({
      model: section
    });

  },

  eventShow: function (id) {
    var vent = new Whiteboard.Models.Event({ id: id });
    vent.fetch({
      success: function () {
        var view = new Whiteboard.Views.EventShow({
          model: vent
        });

        this._swapView(view);
      }.bind(this)
    });
  }
});
