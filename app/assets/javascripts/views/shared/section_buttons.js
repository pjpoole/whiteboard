Whiteboard.Views.SectionButtons = Mn.ItemView.extend({
  tagName: 'div',
  className: 'clearfix section-buttons',

  template: JST['shared/section_buttons'],

  triggers: {
    'click #create-section a': 'section:create'
  },

  onSectionCreate: function () {
    eventChannel.command('section:create');
  }
});
