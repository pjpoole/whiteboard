Whiteboard.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: Whiteboard.Models.User,

  initialize: function () {
    userChannel.comply({
      'user:add': this.userAdd
    }, this);

    userChannel.reply({
      'user:get': this.getOrFetch,
      'user:name': this.yieldName
    }, this);
  },

  userAdd: function (model) {
    this.add(model, { merge: true });
  },

  getOrFetch: function (id) {
    var user = this.get(id);
    if (!user) {
      user = new this.model({ id: id });
    }
    user.fetch();
    return user;
  },

  yieldName: function (id) {
    var user = this.get(id);

    return user.escape('name');
  }
});
