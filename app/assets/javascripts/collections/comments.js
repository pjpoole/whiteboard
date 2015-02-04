Whiteboard.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',
  model: Whiteboard.Models.Comment,

  initialize: function (models, options) {
    options || (options = {});

    if (options.post) this.post = options.post;
  }
});
