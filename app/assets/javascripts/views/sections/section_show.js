Whiteboard.Views.SectionShow = Mn.LayoutView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  templateHelpers: function () {
    var model = this.model;
    return {
      instructor: model.instructor(),
      sectionTitle: model.escape('title'),
      sectionDescription: model.escape('description')
    };
  },

  regions: {
    description: '#course-section',
    forum: '#forum',
    syllabus: '#syllabus'
  },

  events: {
    'click .post-create': 'postCreate'
  },

  postCreate: function (ev) {
    ev.preventDefault();

    eventChannel.command('post:create', {
      section_id: this.model.id
    });
  },

  onBeforeShow: function () {
    var userIsMember = eventChannel.request('user:member', this.model.id);

    if (userIsMember) {
      this.getRegion('syllabus').show(new Whiteboard.Views.EventsList({
        collection: this.model.vents()
      }));

      this.getRegion('forum').show(new Whiteboard.Views.PostsList({
        collection: this.model.posts()
      }))
    }
  }
});
