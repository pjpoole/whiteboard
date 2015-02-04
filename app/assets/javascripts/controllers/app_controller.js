Whiteboard.Controllers.App = Mn.Controller.extend({
  initialize: function (options) {
    this.region = options.region;
  },

  showHelper: function (view, model, promise) {
    if (model.isNew) {
      promise.done(function () {
        this.region.show(view);
      }.bind(this));
    } else {
      this.region.show(view);
    }
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
    var promise, section, view;
    if (eventChannel.request('user:member', id)) {
      section = eventChannel.request('user:section', id);
    } else {
      section = new Whiteboard.Models.Section({ id: id });
    }

    promise = section.fetch();
    view = new Whiteboard.Views.SectionShow({
      model: section
    });

    this.showHelper(view, section, promise)

    Backbone.history.navigate('sections/' + id);
  },

  eventShow: function (id) {
    var promise, view,
        vent = new Whiteboard.Models.Event({ id: id });
    promise = vent.fetch({
      success: function (model, resp) {
        var section = eventChannel.request(
          'user:section', vent.get('section_id')
        );

        vent = section.vents().add(model, { merge: true });
      }
    });

    view = new Whiteboard.Views.EventShow({ model: vent });
    this.showHelper(view, vent, promise);

    Backbone.history.navigate('events/' + id);
  },

  postShow: function (id) {
    var promise, view,
        post = new Whiteboard.Models.Post({ id: id });

    promise = post.fetch({
      success: function (model, resp) {
        var section = eventChannel.request(
          'user:section', post.get('section_id')
        );

        post = section.posts().add(model, { merge: true });
      }
    });

    view = new Whiteboard.Views.PostShow({ model: post });
    this.showHelper(view, post, promise);

    Backbone.history.navigate('posts/' + id);
  }
});
