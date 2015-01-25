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
  }
});
