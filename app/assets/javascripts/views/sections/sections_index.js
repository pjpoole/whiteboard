Whiteboard.Views.SectionsIndex = Mn.CompositeView.extend({
  tagName: 'section',
  className: 'section-index',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',

  template: JST['sections/index']
});
