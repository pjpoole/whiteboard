Whiteboard.Views.SectionsIndex = Mn.CompositeView.extend({
  tagName: 'section',
  className: 'section-index',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',

  template: JST['sections/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.makeSortable);
  },

  makeSortable: function () {
    $('#section-list').datatable({
      pageSize: 20,
      sort: [true, true],
      filters: [true, true],
      filterText: 'Search...'
    });
  }
});
