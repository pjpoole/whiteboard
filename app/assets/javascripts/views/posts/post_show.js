Whiteboard.Views.PostShow = Mn.CompositeView.extend({
  template: JST['posts/show'],
  templateHelpers: function () {
    var model = this.model;
    return {
      sectionId: model.section_id,
      sectionTitle: model.section().get('title'),
      hasEvent: !!model.event_id,
      eventId: model.event_id,
      eventName: model.vent().get('name'),
      postTopic: model.escape('topic'),
      postBody: model.escape('body')
    }
  },

});
