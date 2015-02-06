Whiteboard.Views.EventsList = Mn.CompositeView.extend({
  tagName: 'table',
  className: 'events-display table table-striped',
  childView: Whiteboard.Views.EventItem,
  childViewContainer: '#events-body',

  events: {
    'keydown #event-list-form': 'maybeSubmit'
  },

  getTemplate: function () {
    if (sessionChannel.request('user:teaches', this.collection.section.id)) {
      return JST['events/list'];
    } else {
      return JST['events/list_clean'];
    }
  },

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
      event: {
        date: moment($target.find('#event_date').val()).local(),
        name: $target.find('#event_name').val(),
        event_type: $target.find('#event_event_type').val(),
        section_id: this.collection.section.id
      }
    };

    this.collection.create(eventContent, { wait: true });
  }


});
