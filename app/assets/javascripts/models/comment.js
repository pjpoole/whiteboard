Whiteboard.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (resp) {
    if (resp.user) {
      userChannel.command('user:add', resp.user);
      delete resp.user;
    }

    return resp;
  }
});
