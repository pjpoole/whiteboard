Whiteboard.Views.PostShow = Mn.CompositeView.extend({
  template: JST['posts/show'],
  templateHelpers: function () {
    var model = this.model, eventName, eventId, hasEvent;

    hasEvent = !!model.event_id;

    if (hasEvent) {
      eventName = model.vent().escape('name');
      eventId = model.get('event_id');
    }
    return {
      sectionId: model.get('section_id'),
      sectionTitle: model.section().get('title'),
      hasEvent: hasEvent,
      eventId: eventId,
      eventName: eventName,
      postTopic: model.escape('topic'),
      postBody: model.escape('body')
    }
  },

});
