Whiteboard.Views.SectionsIndex = Mn.CompositeView.extend({
  tagName: 'section',
  className: 'section-index',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',
  childViewOptions: {
    showEnrollment: true
  },

  template: JST['sections/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.makeSortable);
  },

  makeSortable: function () {
    $('#section-list').dataTable({
      pagingType: 'simple',
      columns: [
        { searchable: false },
        null,
        null
      ]
    });
  }
});
