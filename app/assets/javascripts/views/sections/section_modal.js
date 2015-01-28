Whiteboard.Views.SectionModal = Backbone.Modal.extend({
  template: JST['sections/form'],

  submitEl: '.bbm-button',

  onDestroy: function () {
    $('tester').remove();
  },

  submit: function (ev) {
    var $form = $('#modal-region form');
    debugger
    this.model.save({
      section: {
        title: $form.find('#section_title').val(),
        description: $form.find('#section_description').val()
      }
    }, {
      success: function (model) {
        Whiteboard.currentUser.sectionsInstructed().add(model);
      },
      error: function (resp) {
        console.log(resp);
      }
    });
  }
});
