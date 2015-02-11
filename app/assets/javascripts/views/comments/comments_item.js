Whiteboard.Views.CommentsItem = Mn.CompositeView.extend({
  childView: Whiteboard.Views.CommentsItem,
  childViewContainer: '.children',
  childViewOptions: function (model) {
    var childComments = this.post.comments().where({
      parent_id: model.id
    });

    return {
      post: this.post,
      collection: new Whiteboard.Collections.Comments(childComments)
    };
  },

  template: JST['comments/item'],
  templateHelpers: function () {
    var model = this.model;
    return {
      commentBody: model.escape('body'),
      commentAuthor: userChannel.request('user:name', model.get('user_id')),
      timeAgo: moment(model.get('created_at')).fromNow()
    }
  },

  events: {
    'click .show-reply': 'showReply',
    'click .hide-reply': 'hideReply',
    'click .new-comment': 'newComment'
  },

  initialize: function (options) {
    this.post = options.post;
  },

  onRender: function () {
    this.$commentForm = this.$('#new_comment_' + this.model.id);
  },

  showReply: function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.$commentForm.removeClass('hidden');
  },

  hideReply: function (ev) {
    ev.preventDefault();
    this.$commentForm.addClass('hidden');
  },

  newComment: function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    var $body, comments, comment,
        $form = this.$commentForm,
        model = this.model;

    comments = this.collection;
    comment = new comments.model();
    $body = this.$commentForm.find('#comment_body');

    comment.save({
      comment: {
        body: $body.val(),
        post_id: this.post.id,
        parent_id: model.id
      }
    }, {
        success: function (data) {
          $body.val("");
          $form.addClass('hidden');
          comments.add(data);
        }
    });
  }
});
