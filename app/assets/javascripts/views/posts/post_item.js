Whiteboard.Views.PostItem = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'post-item',

  template: JST['posts/item'],
  templateHelpers: function () {
    var model = this.model;
    return {
      postTopic: model.escape('topic'),
      postAuthor: userChannel.request('user:name', model.get('user_id')),
      formattedDate: moment(model.get('created_at')).fromNow()
    }
  }
});
