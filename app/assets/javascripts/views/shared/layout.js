Whiteboard.Views.Layout = Mn.LayoutView.extend({
  template: JST['shared/layout'],

  el: 'body',

  regions: {
    modal: {
      selector: '#modal-region',
      regionType: Mn.Modals
    },
    navbar: '#navbar-region',
    content: '#content-region'
  },

  initialize: function () {
    this.listenTo(eventChannel, 'signOut', this.shutDown);
    modalChannel.comply({
      'section:create': this.sectionCreate,
      'signin:show': this.showSignIn,
      'post:create': this.postCreate
    }, this);
  },

  showSignIn: function (view) {
    this.getRegion('modal').show(view);
  },

  sectionCreate: function () {
    this.getRegion('modal').show(new Whiteboard.Views.SectionModal({
      model: new Whiteboard.Models.Section()
    }));
  },

  postCreate: function (options) {
    if (!options || !options.section_id) {
      return;
    }

    this.getRegion('modal').show(new Whiteboard.Views.PostModal({
      model: new Whiteboard.Models.Post({
        section_id: options.section_id,
        event_id: options.event_id
      })
    }));
  },

  shutDown: function () {
    this.getRegion('content').empty();
  },

  onRender: function () {
    this.getRegion('navbar').show(new Whiteboard.Views.Navbar());
  }
});
