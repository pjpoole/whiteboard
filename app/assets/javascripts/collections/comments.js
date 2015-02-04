Whiteboard.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',

  initialize: function (models, options) {
    options || (options = {});

    if (options.post) this.post = options.post;
  }
});
