Whiteboard.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',


  initialize: function (options) {
    this.sections;
    this.sections = options.sections;
    this.courseButtons = new Whiteboard.Views.SectionButtons();
    this.addSubview('#create-search', this.courseButtons);
  },

  renderSections: function (sections, options) {

    var view = new Whiteboard.Views.SectionsIndex({
      collection: sections,
      heading: options.heading
    });

    this.addSubview('#all-classes', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    if (this.sections['instructed']) this.renderSections(
      this.sections['instructed'], {
      heading: "You are teaching:"
    });
    if (this.sections) this.renderSections(
      this.sections['sections'], {
      heading: "You are enrolled in:"
    });
    this.attachSubviews();
    return this;
  }
});
