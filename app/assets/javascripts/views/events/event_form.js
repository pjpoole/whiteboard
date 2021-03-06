// TODO: deprecated
Whiteboard.Views.EventForm = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'events-form table-form',
  template: JST['events/form'],

  templateHelpers: {
    defaultDate: moment().format('YYYY-MM-DD')
  },

  events: {
    'submit': 'submit',
    'keydown': 'maybeSubmit'
  },

  maybeSubmit: function (event) {
    if (event.keyCode === 13) {
      this.submit(event);
    }
  },

  submit: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    var eventContent = {
      section_id: this.collection.section.id,
      event: {
        date: moment($target.find('#event_date').val()).local(),
        name: $target.find('#event_name').val(),
        event_type: $target.find('#event_event_type').val()
      }
    };

    this.collection.create(eventContent, { wait: true });
    this.render(eventContent['event']['date']);

    setTimeout(function () {
      this.$('.select-after-input').focus();
    }.bind(this), 100);
  }
});
