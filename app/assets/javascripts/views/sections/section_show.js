Whiteboard.Views.SectionShow = Backbone.CompositeView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  initialize: function (options) {
    this.model = options.model;
    this.eventListView = new Whiteboard.Views.EventsList({
      collection: this.model.vents()
    });

    this.addSubview('.syllabus', this.eventListView);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      section: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  }
});
