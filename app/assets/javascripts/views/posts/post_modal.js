Whiteboard.Views.PostModal = Backbone.Modal.extend({
  template: JST['posts/form'],

  submitEl: '.bbm-button',

  initialize: function () {
    this.sectionName = eventChannel.request(
      'user:section', this.model.get('section_id')
    ).escape('title');
  },

  submit: function (ev) {
    var $form = $('#modal-region form');

    this.model.save({
      post: {
        topic: $form.find('#post_topic').val(),
        body: $form.find('#post_body').val(),
        section_id: this.model.get('section_id'),
        event_id: this.model.get('event_id')
      }
    }, {
      success: function (model) {
        eventChannel.command('add:post', model);
      },
      error: function (resp) {
        console.log(resp);
      }
    })
  }
})
