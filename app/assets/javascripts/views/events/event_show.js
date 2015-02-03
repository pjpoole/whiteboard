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

  events: {
    'click .post-create': 'postCreate'
  },

  postCreate: function (ev) {
    ev.preventDefault();

    eventChannel.command('post:create', {
      event_id: this.model.id,
      section_id: this.model.section().id
    });
  },

  onBeforeShow: function () {
    if (this.model.posts().size() !== 0) {
      this.getRegion('forum').show(new Whiteboard.Views.PostsList({
        collection: this.model.posts()
      }));
    }
  }

});
