Whiteboard.Views.SectionShow = Mn.LayoutView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  regions: {
    description: '#course-section',
    forum: '#forum',
    syllabus: '#syllabus'
  },

  onBeforeShow: function () {
    
  },

  initialize: function (options) {

    this.model = options.model;
    if (Whiteboard.currentUser.memberOf(this.model)) {
      this.eventListView = new Whiteboard.Views.EventsList({
        collection: this.model.vents()
      });

      this.addSubview('.syllabus', this.eventListView);
    }

    this.listenTo(this.model, 'change', this.render);
  }
});
