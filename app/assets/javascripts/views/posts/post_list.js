Whiteboard.Views.PostsList = Backbone.CompositeView.extend({
  className: 'posts-list',

  template: JST['posts/list'],

  initialize: function () {
    this.collection.each(this.addPostView, this);
    this.listenTo(this.collection, 'add', this.addPostView);
  },

  addPostView: function (post) {
    var view = new Whiteboard.Views.PostItem({
      model: post
    });
    this.addSubview('.posts-body', view);
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
