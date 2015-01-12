Whiteboard.Views.SectionShow = Backbone.CompositeView.extend({
  tagName: 'section',
  className: 'section-show',

  template: JST['sections/show'],

  initialize: function (options) {
    this.model = options.model;

    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      section: this.model
    });

    this.$el.html(content);
    return this;
  }
});
