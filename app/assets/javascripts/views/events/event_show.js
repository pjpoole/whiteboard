Whiteboard.Views.EventShow = Backbone.View.extend({
  template: JST['events/show'],

  render: function () {
    var content = this.template({ vent: this.model });

    this.$el.html(content);
    return this;
  }
});
