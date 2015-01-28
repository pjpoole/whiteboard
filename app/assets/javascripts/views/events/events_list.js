Whiteboard.Views.EventsList = Mn.CompositeView.extend({
  tagName: 'table',
  className: 'events-display',
  childView: Whiteboard.Views.EventItem,
  childViewContainer: '#events-body',

  events: {
    'keydown #event-list-form': 'maybeSubmit'
  },

  template: JST['events/list'],

  templateHelpers: {
    defaultDate: moment().format('YYYY-MM-DD')
  },

  maybeSubmit: function (event) {
    if (event.keyCode === 13) {
      this.submit(event);
    }
  },

  submit: function (event) {
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
  }


});
