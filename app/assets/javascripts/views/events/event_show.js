Whiteboard.Views.EventShow = Backbone.View.extend({
  template: JST['events/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ vent: this.model });

    this.$el.html(content);
    debugger
    return this;
  }
});
