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
      sectionTitle: model.section().escape('title'),
      hasEvent: hasEvent,
      eventId: eventId,
      eventName: eventName,
      postTopic: model.escape('topic'),
      postBody: model.escape('body')
    }
  },

  events: {
    'click .show_reply': 'showReply',
    'click .hide_reply': 'hideReply',
    'submit .new_comment': 'newComment'
  },

  onRender: function () {
    this.commentForm = this.$el.find('#new_comment');
  },

  showReply: function (ev) {
    ev.preventDefault();
    this.commentForm.removeClass('hidden');
  },

  hideReply: function (ev) {
    ev.preventDefault();
    this.commentForm.addClass('hidden');
  },

  newComment: function (ev) {
    ev.preventDefault();

    var model = this.model;

    var comment = new this.comments().model({
      body: this.commentForm.find('#comment_body').val(),
      section_id: model.get('section_id'),
      event_id: null
    });


  }

});
