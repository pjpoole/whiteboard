Whiteboard.Views.PostItemShow = Backbone.View.extend({
  tagName: 'tr',
  className: 'post-item',

  template: JST['posts/item_show'],

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
