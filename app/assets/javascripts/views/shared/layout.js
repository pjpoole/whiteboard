Whiteboard.Views.Layout = Mn.LayoutView.extend({
  template: JST['shared/layout'],

  el: 'body',

  regions: {
    modal: '#modal-region',
    sidebar: '#sidebar-region',
    content: 'content-region'
  }
});
