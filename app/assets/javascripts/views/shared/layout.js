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
    this.listenTo(Whiteboard.currentUser, 'signOut', this.shutDown);
    this.listenTo(this, 'all', this.logEvent);
  },

  logEvent: function (name) {
    console.log(name);
  },

  shutDown: function () {
    this.getRegion('content').empty();
  },

  onRender: function () {
    this.getRegion('sidebar').show(new Whiteboard.Views.Sidebar());
  }
});
