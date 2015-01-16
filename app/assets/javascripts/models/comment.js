Whiteboard.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (resp) {
    return resp;
  }
});
