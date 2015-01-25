Whiteboard.Views.SectionsList = Mn.CollectionView.extend({
  tagName: 'table',
  className: 'section-list',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',

  template: JST['sections/list']
});
