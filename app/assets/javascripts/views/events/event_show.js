Whiteboard.Views.EventShow = Mn.LayoutView.extend({
  template: JST['events/show'],
  templateHelpers: function () {
    return {
      sectionTitle: this.model.section().escape('title'),
      sectionId: this.model.section().id,
      formattedDate: moment(
        this.model.get('date')).format('MMM-DD')
    };
  },

  regions: {
    forum: '#forum'
  },

  onBeforeShow: function () {
    this.getRegion('forum').show(new Whiteboard.Views.PostsList({
      collection: this.model.posts()
    }));
  }

});
