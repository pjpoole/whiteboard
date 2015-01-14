Whiteboard.Views.SectionsList = Backbone.CompositeView.extend({
  className: 'section-list',

  template: JST['sections/list'],

  initialize: function (options) {
    this.heading = options.heading;
    this.collection.each(this.addSectionView, this);
    this.listenTo(this.collection, 'add', this.addSectionView);
  },

  addSectionView: function (section) {
    var view = new Whiteboard.Views.SectionItem({
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
