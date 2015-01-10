Whiteboard.Routers.Router = Backbone.Router.extend({

  _swapView = function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl(view.render().$el)
  }
});
