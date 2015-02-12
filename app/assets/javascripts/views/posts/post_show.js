Whiteboard.Views.PostShow = Mn.CompositeView.extend({
  childView: Whiteboard.Views.CommentsItem,
  childViewContainer: '#comments',
  childViewOptions: function (model) {
    var childComments = this.model.comments().where({
      parent_id: model.id
    });

    return {
      post: this.model,
      collection: new Whiteboard.Collections.Comments(childComments)
    };
  },

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
      postBody: model.escape('body'),
      postAuthor: userChannel.request('user:name', model.get('user_id')),
      timeAgo: moment(model.get('created_at')).fromNow()
    }
  },

  events: {
    'click .show-reply': 'showReply',
    'click .hide-reply': 'hideReply',
    'click .new-comment': 'newComment'
  },

  onRender: function () {
    this.$commentForm = this.$('#new_comment');
  },

  showReply: function (ev) {
    ev.preventDefault();
    this.$commentForm.removeClass('hidden');
  },

  hideReply: function (ev) {
    ev.preventDefault();
    this.$commentForm.addClass('hidden');
  },

  newComment: function (ev) {
    ev.preventDefault();

    var $body, comments, comment, $form,
        collection = this.collection,
        model = this.model;

    comments = model.comments();
    comment = new comments.model();
    $form = this.$commentForm
    $body = $form.find('#comment_body');

    comment.save({
      comment: {
        body: $body.val(),
        post_id: model.id,
        parent_id: null
      }
    }, {
        success: function (data) {
          $body.val("");
          $form.addClass('hidden');
          collection.add(data);
        }
    });
  }

});
