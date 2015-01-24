Whiteboard.Views.SectionsList = Mn.CollectionView.extend({
  className: 'section-list',

  template: JST['sections/list'],

  initialize: function (options) {
    this.heading = options.heading;

    this.collection.each(this.addSectionView, this);
    this.listenTo(this.collection, 'add', this.addSectionView);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'all', this.showEvent)
  }
});
