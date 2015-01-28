Whiteboard.Views.EventsList = Mn.CompositeView.extend({
  className: 'events-list',
  childView: Whiteboard.Views.EventItem,
  childViewContainer: '#events-body',

  template: JST['events/list'],

  initialize: function () {
    var sections = eventChannel.request('sections:enrolled');
    if (sections.get(this.collection.section.id)) {
      this.eventFormView = new Whiteboard.Views.EventForm({
        model: new Whiteboard.Models.Event(),
        collection: this.collection
      });
    }
  },

  onRender: function () {
    $('#event-list-form').append(
      new Whiteboard.Views.EventForm().$el
    );
  }
});
