Whiteboard.Views.SectionItemShow = Backbone.View.extend({
  tagName: 'tr',
  className: 'section',

  template: JST['sections/item_show'],

  render: function () {
    var content = this.template({
      section: this.model
    });
    this.$el.html(content);
    return this;
  }
});
