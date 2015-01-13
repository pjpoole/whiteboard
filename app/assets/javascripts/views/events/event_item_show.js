Whiteboard.Views.EventItemShow = Backbone.View.extend({
  tagName: 'tr',
  className: 'event-item',

  template: JST['events/item_show'],

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
