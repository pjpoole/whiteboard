Whiteboard.Views.EventItem = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'event-item',

  template: JST['events/item'],
  templateHelpers: function () {
    return {
      formattedDate: moment(this.model.get('date')).format('MMM D')
    }
  }
});
