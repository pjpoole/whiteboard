Whiteboard.Views.SectionShow = Mn.CompositeView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  initialize: function (options) {

    this.model = options.model;
    if (Whiteboard.currentUser.memberOf(this.model)) {
      // if (this.model.vents())
      this.eventListView = new Whiteboard.Views.EventsList({
        collection: this.model.vents()
      });

      this.addSubview('.syllabus', this.eventListView);
    }

    this.listenTo(this.model, 'change', this.render);
  }
});
