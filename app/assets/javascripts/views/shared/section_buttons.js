Whiteboard.Views.SectionButtons = Backbone.View.extend({
  tagName: 'div',
  className: 'clearfix section-buttons',

  template: JST['shared/section_buttons'],

  events: {
    'click .create-section': 'showModal',
    'click .search-sections': 'search'
  },

  showModal: function () {
    var section = new Whiteboard.Models.Section();

    var view = new Whiteboard.Views.SectionModal({
      model: section
    });
    $('body').prepend(view.render().$el);
    view.delegateEvents();
  },


  search: function () {
    Backbone.history.navigate('#sections', true);
  },


  render: function () {
    var content = this.template();

    this.$el.html(content);
    return this;
  }

});
