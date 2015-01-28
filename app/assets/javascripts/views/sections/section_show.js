Whiteboard.Views.SectionShow = Mn.LayoutView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  templateHelpers: function () {
    return {
      instructor: this.model.instructor()
    };
  },

  regions: {
    description: '#course-section',
    forum: '#forum',
    syllabus: '#syllabus'
  },

  onBeforeShow: function () {
    var userIsMember = eventChannel.request('user:member', this.model);

    if (userIsMember) {
      this.getRegion('syllabus').show(new Whiteboard.Views.EventsList({
        collection: this.model.vents()
      }));
    }
  }
});
