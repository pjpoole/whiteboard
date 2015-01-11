Whiteboard.Views.SectionsIndex = Backbone.CompositeView.extend({
  tagName: 'section',
  className: 'section-index',

  template: JST['sections/index'],

  initialize: function (options) {
    this.heading = options.heading;
    this.collection.each(this.addSection, this);
    this.listenTo(this.collection, 'add', this.addSection);
  },

  addSection: function (section) {
    var view = new Whiteboard.Views.SectionItemShow({
      model: section
    });
    this.addSubview('.sections-body', view);
  },

  render: function () {
    var content = this.template({
      heading: this.heading
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
