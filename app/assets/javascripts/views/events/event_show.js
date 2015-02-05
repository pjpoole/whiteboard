Whiteboard.Views.EventShow = Mn.LayoutView.extend({
  template: JST['events/show'],
  templateHelpers: function () {
    var model = this.model;
    return {
      sectionTitle: model.section().escape('title'),
      sectionId: model.section().id,
      eventName: model.escape('name'),
      eventBody: model.escape('body'),
      formattedDate: moment(
        model.get('date')).format('MMM-DD')
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

    modalChannel.command('post:create', {
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
