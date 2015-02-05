Whiteboard.Views.SectionModal = Backbone.Modal.extend({
  template: JST['sections/form'],

  submitEl: '.modal-submit',

  submit: function (ev) {
    var $form = $('#modal-region form');

    this.model.save({
      section: {
        title: $form.find('#section_title').val(),
        description: $form.find('#section_description').val()
      }
    }, {
      success: function (model) {
        eventChannel.command('add:sectionInstucted', model);
      },
      error: function (resp) {
        console.log(resp);
      }
    });
  }
});
