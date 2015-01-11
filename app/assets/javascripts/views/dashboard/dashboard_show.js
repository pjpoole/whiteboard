Whiteboard.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',

  initialize: function (options) {
    this.sections = options.sections;
    this.sectionsInstructed = options.sectionsInstructed;
  },

  renderSections: function () {
    var view = new Whiteboard.Views.SectionsIndex({
      collection: this.sections,
      title: "You are a student in:"
    });

    this.addSubview('#all-classes', view);
  },

  renderSectionsInstructed: function () {
    var view = new Whiteboard.Views.SectionsIndex({
      collection: this.sectionsInstructed,
      title: "You are teaching:"
    });

    this.addSubview('#all-classes', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    if (this.sectionsInstructed) this.renderSectionsInstructed();
    if (this.sections) this.renderSections();

    return this;
  }
});
