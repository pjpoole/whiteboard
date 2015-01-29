Whiteboard.Views.EventShow = Mn.LayoutView.extend({
  template: JST['events/show'],

  regions: {
    forum: '#forum'
  },

  onBeforeShow: function () {
    this.getRegion('forum').show(new Whiteboard.Views.PostsList({
      collection: this.model.posts();
    }));
  }

});
