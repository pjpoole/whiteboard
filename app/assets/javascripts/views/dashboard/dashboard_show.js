Whiteboard.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',

  initialize: function (models, options) {
    this.sections = options.sections;
    this.sectionsInstructed = options.sectionsInstructed;
  },

  addSection: function (section) {
    var view = new Whiteboard.Views.SectionItemShow({
      model: section
    });

    this.addSubview();
  },

  render: function () {

  }
});
