Whiteboard.Views.PostsList = Mn.CompositeView.extend({
  className: 'posts-list',
  childView: Whiteboard.Views.PostItem,
  childViewContainer: '.posts-body',

  template: JST['posts/list']
});
