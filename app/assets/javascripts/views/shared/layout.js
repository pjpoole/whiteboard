Whiteboard.Views.Layout = Mn.LayoutView.extend({
  template: JST['shared/layout'],

  el: 'body',

  regions: {
    modal: {
      selector: '#modal-region',
      regionType: Mn.Modals
    },
    sidebar: '#sidebar-region',
    content: '#content-region'
  },

  onRender: function () {
    this.getRegion('sidebar').show(new Whiteboard.Views.Sidebar());
  }
});
