var eventChannel = Backbone.Radio.channel('event');

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
    this.listenTo(eventChannel, 'signOut', this.shutDown);
  },

  logEvents: function (name) {
    console.log(name);
  },

  sectionCreate: function (view) {
    var section = new Whiteboard.Models.Section();
    this.getRegion('modal').show(new Whiteboard.Views.SectionModal({
      model: section
    }));
  },

  shutDown: function () {
    this.getRegion('content').empty();
  },

  onRender: function () {
    this.getRegion('sidebar').show(new Whiteboard.Views.Sidebar());
  }
});
