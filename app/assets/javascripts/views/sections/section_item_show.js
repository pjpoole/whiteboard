Whiteboard.Views.SectionItemShow = Backbone.View.extend({
  tagName: 'tr',
  className: 'section-item',

  template: JST['sections/item_show'],

  // events: {
  //   'click td': 'editItem'
  // },

  render: function () {
    var content = this.template({
      section: this.model
    });
    this.$el.html(content);
    return this;
  }
});
