Whiteboard.Controllers.App = Mn.Controller.extend({
  initialize: function (options) {
    this.region = options.region;
  },

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
    var section, that = this;
    if (eventChannel.request('user:member', id)) {
      section = eventChannel.request('user:section', id);
    } else {
      section = new Whiteboard.Models.Section({ id: id });
    }
    section.fetch().done( function () {
      that.region.show(new Whiteboard.Views.SectionShow({
        model: section
      }));
    });

    Backbone.history.navigate('sections/' + id);
  },

  eventShow: function (id) {
    var that = this,
        vent = new Whiteboard.Models.Event({ id: id });

    vent.fetch({
      success: function (model, resp) {
        var section = eventChannel.request('user:section', vent.get('section_id'));
        vent = section.vents().add(model, { merge: true });
        that.region.show(new Whiteboard.Views.EventShow({
          model: vent
        }));
      }
    });
    Backbone.history.navigate('events/' + id);
  }
});
