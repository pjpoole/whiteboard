Whiteboard.Views.PostItem = Backbone.View.extend({
  tagName: 'tr',
  className: 'post-item',

  template: JST['posts/item'],

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
