Whiteboard.Views.Dashboard = Mn.LayoutView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',

  regions: {
    buttons: '#create-search',
    teaching: '#teaching',
    enrollments: '#enrollments',
  },

  initialize: function (options) {
    this.sections = options.sections;
  },

  onBeforeShow: function () {
    this.getRegion('buttons').show(new Whiteboard.Views.SectionButtons());

    this.getRegion('enrollments').show(new Whiteboard.Views.SectionsList({
      collection: this.sections['sections'],
      heading: 'Your enrollments:'
    }));

    this.getRegion('teaching').show(new Whiteboard.Views.SectionsList({
      collection: this.sections['instructed'],
      heading: 'You are teaching:'
    }));
  }
});
