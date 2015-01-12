Whiteboard.Views.SectionButtons = Backbone.View.extend({
  tagName: 'section',
  className: 'clearfix section-buttons',

  template: JST['utils/section_buttons'],

  events: {
    'click .create-section': 'create',
    'click .search-sections': 'search'
  },

  create: function () {
    Backbone.history.navigate('#/sections/new', true);
  },

  search: function () {
    Backbone.history.navigate('#/sections', true);
  },


  render: function () {
    var content = this.template();

    this.$el.html(content);
    return this;
  }

});
