Whiteboard.Views.Dashboard = Mn.LayoutView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',


  initialize: function (options) {
    debugger
    this.sections = options.sections;
    this.courseButtons = new Whiteboard.Views.SectionButtons({
      collection: this.sections['instructed']
    });
  }
});
