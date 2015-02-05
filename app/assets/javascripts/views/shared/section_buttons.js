Whiteboard.Views.SectionButtons = Mn.ItemView.extend({
  tagName: 'div',
  className: 'clearfix section-buttons',

  template: JST['shared/section_buttons'],

  triggers: {
    'click #create-section': 'section:create',
    'click #search-sections': 'section:search'
  },

  onSectionCreate: function () {
    modalChannel.command('section:create');
  },

  onSectionSearch: function () {
    Backbone.history.navigate('#sections', { trigger: true });
  }
});
