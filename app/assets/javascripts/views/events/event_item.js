Whiteboard.Views.EventItem = Backbone.View.extend({
  tagName: 'tr',
  className: 'event-item',

  template: JST['events/item'],

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  }
});
