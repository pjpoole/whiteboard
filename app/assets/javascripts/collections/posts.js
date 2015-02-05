Whiteboard.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',
  model: Whiteboard.Models.Post,

  initialize: function (models, options) {
    options || (options = {});
    this.section = options.section;
  }
});
