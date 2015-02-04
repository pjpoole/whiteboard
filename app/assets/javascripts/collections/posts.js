Whiteboard.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',

  initialize: function (models, options) {
    options || (options = {});
    this.section = options.section;
  }
});
