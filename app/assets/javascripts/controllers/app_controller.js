Whiteboard.Controllers.App = Mn.Controller.extend({
  dashboard: function () {
    this.region.show(
      new Whiteboard.Views.Dashboard({
        sections: {
          // TODO: fix
          sections: Whiteboard.currentUser.sections(),
          instructed: Whiteboard.currentUser.sectionsInstructed()
        }
    }));
    Backbone.history.navigate('');
  },

  sectionsIndex: function () {
    var allSections = new Whiteboard.Collections.Sections();
    allSections.fetch();

    this.region.show(
      new Whiteboard.Views.SectionsIndex({
        collection: allSections
    }));
    Backbone.history.navigate('sections');
  },

  sectionShow: function (id) {
    var section = new Whiteboard.Models.Section({ id: id });
    section.fetch();

    var view = new Whiteboard.Views.SectionShow({
      model: section
    });
    Backbone.history.navigate('sections/' + id);
  },

  eventShow: function (id) {
    var vent = new Whiteboard.Models.Event({ id: id });
    vent.fetch({
      success: function () {
        var view = new Whiteboard.Views.EventShow({
          model: vent
        });
      }
    });
    Backbone.history.navigate('events/' + id);
  }
});
