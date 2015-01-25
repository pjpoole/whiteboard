Whiteboard.Views.Dashboard = Mn.LayoutView.extend({
  template: JST['dashboard/show'],

  tagName: 'section',
  className: 'dashboard',

  regions: {
    buttons: '#create-search',
    classes: '#all-classes'
  },

  initialize: function (options) {
    this.sections = options.sections;
  },

  onBeforeShow: function () {
    this.getRegion('buttons').show(new Whiteboard.Views.SectionButtons());

    if (this.sections['sections']) {
      this.getRegion('classes').show(new Whiteboard.Views.SectionsList({
        collection: this.sections['sections'],
        heading: 'Your enrollments:'
      }))
    }
    if (this.sections['sections']) {
      this.getRegion('classes').show(new Whiteboard.Views.SectionsList({
        collection: this.sections['sections'],
        heading: 'You are teaching:'
      }))
    }

  }
});
