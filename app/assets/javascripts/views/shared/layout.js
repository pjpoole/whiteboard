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

  initialize: function () {
    this.listenTo(Whiteboard.currentUser, 'signIn', this.addMain);
    this.listenTo(Whiteboard.currentUser, 'signOut', this.emptyContent);
  },

  addMain: function () {
    this.getRegion('content').show(new Whiteboard.Views.Main());
  },

  emptyContent: function () {
    this.getRegion('content').empty();
  },

  onRender: function () {
    this.getRegion('sidebar').show(new Whiteboard.Views.Sidebar());
  }
});
