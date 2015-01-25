Whiteboard.Views.Main = Mn.LayoutView.extend({
  template: JST['shared/main'],

  regions: {
    main: '#main'
  },

  initialize: function () {
    Whiteboard.AppController.region = this.getRegion('main');
  }
});
